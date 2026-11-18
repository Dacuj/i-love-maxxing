import { env } from "cloudflare:workers";
import { getDb } from "../../../../db";
import { timelineAssets } from "../../../../db/schema";

const MAX_UPLOAD_BYTES = 12 * 1024 * 1024;

function safeExtension(file: File) {
  const byType: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/avif": "avif",
  };
  return byType[file.type] ?? "img";
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File) || !file.type.startsWith("image/")) {
      return Response.json({ error: "Choose a valid image file." }, { status: 400 });
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      return Response.json({ error: "Images must be 12 MB or smaller." }, { status: 413 });
    }

    const id = crypto.randomUUID();
    const key = `timeline/${id}.${safeExtension(file)}`;
    await env.TIMELINE_MEDIA.put(key, file.stream(), {
      httpMetadata: { contentType: file.type, cacheControl: "public, max-age=31536000, immutable" },
      customMetadata: { filename: file.name },
    });

    const db = getDb();
    await db.insert(timelineAssets).values({
      id,
      r2Key: key,
      filename: file.name,
      contentType: file.type,
      size: file.size,
    });

    return Response.json({
      id,
      src: `/api/timeline/assets/${id}`,
      filename: file.name,
      contentType: file.type,
      size: file.size,
    }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed";
    return Response.json({ error: message }, { status: 500 });
  }
}
