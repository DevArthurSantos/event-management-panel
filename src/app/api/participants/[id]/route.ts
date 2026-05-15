import { NextRequest, NextResponse } from "next/server";
import { db } from "@app/api/_db";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const event = db.events.find((e) => e.id === id);

  if (!event) {
    return NextResponse.json(
      { error: "Evento não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(event);
}


export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await req.json();
  const { id } = await params;

  const participant = db.participants.find((p) => p.id === id);

  if (!participant) {
    return NextResponse.json(
      { error: "Participant not found" },
      { status: 404 }
    );
  }

  Object.assign(participant, body);

  return NextResponse.json(participant);
}