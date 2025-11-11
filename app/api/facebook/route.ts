import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventData } = body;

    const pixelId = process.env.FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_CONVERSION_API_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json(
        { error: 'Facebook Conversion API not configured' },
        { status: 500 }
      );
    }

    // Get client IP and user agent for better matching
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    const userAgent = request.headers.get('user-agent') || '';

    // Facebook Conversion API payload
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventData.eventSourceUrl || '',
          user_data: {
            client_ip_address: clientIp.split(',')[0].trim(),
            client_user_agent: userAgent,
            fbc: eventData.fbc || undefined,
            fbp: eventData.fbp || undefined,
          },
          custom_data: eventData.customData || {},
        },
      ],
    };

    // Send to Facebook
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook CAPI Error:', result);
      return NextResponse.json(
        { error: 'Failed to send event', details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Facebook CAPI Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
