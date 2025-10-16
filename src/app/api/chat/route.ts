import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  const reply = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Giancarlo Santoro’s AI assistant, helping visitors learn about his career as a networking intern and his IT skills.",
        },
        { role: "user", content: message },
      ],
    }),
  });

  const data = await reply.json();
  const text = data.choices?.[0]?.message?.content || "No response.";
  return NextResponse.json({ reply: text });
}
