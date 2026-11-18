import { eq, sql } from "drizzle-orm";
import { getDb } from "../../../db";
import { timelineConfigs } from "../../../db/schema";

const TIMELINE_ID = "main";

function errorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  return Response.json({ error: message }, { status: 500 });
}

export async function GET() {
  try {
    const db = getDb();
    const [row] = await db
      .select()
      .from(timelineConfigs)
      .where(eq(timelineConfigs.id, TIMELINE_ID))
      .limit(1);

    return Response.json({
      timeline: row ? JSON.parse(row.data) : null,
      updatedAt: row?.updatedAt ?? null,
    });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(request: Request) {
  try {
    const payload = (await request.json()) as { timeline?: unknown };
    if (!Array.isArray(payload.timeline) || payload.timeline.length === 0 || payload.timeline.length > 60) {
      return Response.json({ error: "A timeline with 1–60 scenes is required." }, { status: 400 });
    }

    const data = JSON.stringify(payload.timeline);
    if (data.length > 1_500_000) {
      return Response.json({ error: "Timeline data is too large." }, { status: 413 });
    }

    const db = getDb();
    await db
      .insert(timelineConfigs)
      .values({ id: TIMELINE_ID, data })
      .onConflictDoUpdate({
        target: timelineConfigs.id,
        set: { data, updatedAt: sql`CURRENT_TIMESTAMP` },
      });

    return Response.json({ ok: true, updatedAt: new Date().toISOString() });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE() {
  try {
    const db = getDb();
    await db.delete(timelineConfigs).where(eq(timelineConfigs.id, TIMELINE_ID));
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
