import { env } from "cloudflare:workers";
import { eq } from "drizzle-orm";
import { getDb } from "../../../../../db";
import { timelineAssets } from "../../../../../db/schema";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const db = getDb();
  const [asset] = await db
    .select()
    .from(timelineAssets)
    .where(eq(timelineAssets.id, id))
    .limit(1);

  if (!asset) return new Response("Not found", { status: 404 });
  const object = await env.TIMELINE_MEDIA.get(asset.r2Key);
  if (!object) return new Response("Not found", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("cache-control", "public, max-age=31536000, immutable");
  return new Response(object.body, { headers });
}
