import { NextRequest, NextResponse } from "next/server";
import { db } from "../_db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const event_id = searchParams.get("event_id");

  const participants = event_id
    ? db.participants.filter((p) => p.event_id === event_id)
    : db.participants;

  return NextResponse.json(participants);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const newParticipant = {
    id: crypto.randomUUID(),
    ...body,
  };

  db.participants.push(newParticipant);

  return NextResponse.json(newParticipant, { status: 201 });
}