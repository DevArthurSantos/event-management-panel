import { NextResponse } from "next/server";
import { db } from "../_db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const event_id = searchParams.get("event_id");

  const participants = event_id
    ? db.participants.filter((p) => p.event_id === event_id)
    : db.participants;

  return NextResponse.json(participants);
}

export async function PATCH(req: Request) {
  const body = await req.json();

  const participant = db.participants.find((p) => p.id === body.id);

  if (!participant) {
    return NextResponse.json(
      { error: "Participant not found" },
      { status: 404 }
    );
  }

  Object.assign(participant, body);

  return NextResponse.json(participant);
}