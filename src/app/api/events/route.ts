import { NextRequest, NextResponse } from "next/server";
import { db } from "../_db";

export async function GET() {
  return NextResponse.json(db.events);
}


export async function POST(req: NextRequest) {
  const body = await req.json();

  const newEvent = {
    id: crypto.randomUUID(),
    ...body,
  };

  db.events.push(newEvent);

  return NextResponse.json(newEvent, { status: 201 });
}