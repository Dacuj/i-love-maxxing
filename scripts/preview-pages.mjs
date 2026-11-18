import { mkdir, readFile, rm, symlink } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { basePath } = JSON.parse(await readFile(join(root, "dist/pages-build.json"), "utf8"));
const mount = join(root, ".pages-work/preview");
await rm(mount, { recursive: true, force: true });
await mkdir(mount, { recursive: true });
const serve = basePath ? mount : join(root, "dist/client");
if (basePath) await symlink(join(root, "dist/client"), join(mount, basePath.slice(1)), "dir");
console.log(`Preview: http://localhost:4173${basePath}/`);
const child = spawn("python3", ["-m", "http.server", "4173", "--bind", "127.0.0.1", "--directory", serve], { stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 0));
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
