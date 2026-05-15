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