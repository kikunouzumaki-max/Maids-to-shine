import { NextResponse } from 'next/server';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, area, source = 'fab' } = body;

    const link = generateWhatsAppLink(source, { plan: service, area });

    return NextResponse.json({ url: link });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
