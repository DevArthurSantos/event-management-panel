import { NextResponse } from "next/server";
import { db } from "../_db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const event_id = searchParams.get("event_id");

  const data = event_id
    ? db.checkins.filter((c) => c.event_id === event_id)
    : db.checkins;

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newCheckin = {
    id: crypto.randomUUID(),
    event_id: body.event_id,
    participant_id: body.participant_id,
    timestamp: new Date().toISOString(),
    success: body.success ?? true,
    action: body.action ?? "entry",
    error_reason: body.error_reason ?? null,
  };

  db.checkins.push(newCheckin);

  return NextResponse.json(newCheckin, { status: 201 });
}