import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.OPENAI_API_ID;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Streaming response from OpenAI
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
            content: `You are FervoGear USA's helpful AI assistant.

BLACK FRIDAY DEAL:
- Price: $799 (50% OFF - saves $800.95!)
- Total Value: $1,599.95
- Includes: SFI-5 Suit ($899) + FREE Gloves ($200) + FREE Shoes ($400 value!)
- Plus: Custom Design ($200) + Premium Lining ($150) + Logo Embroidery ($100) + FREE Shipping ($50.95)

OTHER OPTIONS:
- Karting suits: $349 (non-SFI, all design options)
- 30-second form, dedicated designer
- 3.5 weeks delivery (fastest in industry!)
- 1,015+ suits delivered, 4.9★ rating
- Payment plans: $67/month (12 months, 0% APR)

Be enthusiastic about Black Friday deal! Encourage FREE mockup or call (409) 404-0962!`
          },
          ...messages
        ],
        max_tokens: 300,
        temperature: 0.7,
        stream: true, // Enable streaming!
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI Error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to get AI response' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return the stream directly
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
