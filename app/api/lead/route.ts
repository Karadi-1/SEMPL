import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let payload: Record<string, string> = {};

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const formData = await request.formData();
    payload = Object.fromEntries(
      formData.entries().map(([key, value]) => [key, String(value)]),
    );
  }

  // Placeholder for ERPNext lead creation integration.
  // Example next step: POST payload to ERPNext endpoint using server-side env vars.

  return NextResponse.json(
    {
      status: "received",
      message: "Lead endpoint is ready for ERPNext integration.",
      data: payload,
    },
    { status: 202 },
  );
}
