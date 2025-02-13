import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Telegram configuration is missing" }, { status: 500 })
  }

  const text = `
New message from portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram")
    }

    return NextResponse.json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending message to Telegram:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

