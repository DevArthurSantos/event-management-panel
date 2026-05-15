import { NextResponse } from "next/server";
import { db } from "../../_db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const event = db.events.find((e) => e.id === params.id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}