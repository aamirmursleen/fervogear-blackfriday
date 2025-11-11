import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.OPENAI_API_ID;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful FervoGear customer service AI assistant. Answer questions about custom race suits, SFI certifications, ordering process, pricing ($799 Black Friday deal saves $926!), 3.5 week delivery, unlimited customization, Nomex fabric, payment options (Affirm, Klarna - as low as $67/month). Be friendly, concise, and helpful. Always encourage them to get a FREE design mockup (30-second form, dedicated designer, work via call/text/email) or call (409) 404-0962.'
          },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI Error:', data);
      return NextResponse.json(
        { error: 'Failed to get AI response', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
