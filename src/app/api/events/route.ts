import { NextResponse } from "next/server";
import { db } from "../_db";

export async function GET() {
  return NextResponse.json(db.events);
}

export async function PATCH(req: Request) {
  const body = await req.json();

  const event = db.events.find((e) => e.id === body.id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  Object.assign(event, body);

  return NextResponse.json(event);
}