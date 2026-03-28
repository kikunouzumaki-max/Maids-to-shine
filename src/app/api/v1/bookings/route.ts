import { NextResponse } from 'next/server';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().regex(/^\+?971\d{9}$/, 'Invalid UAE phone number'),
  service_id: z.string().optional(),
  area_id: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  frequency: z.enum(['once', 'weekly', 'biweekly', 'monthly']).optional(),
  notes: z.string().optional(),
  source: z.enum(['web', 'whatsapp', 'instagram', 'referral']).default('web'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = bookingSchema.parse(body);

    // In production: 
    // 1. Rate limit via Upstash Redis (10 req/hr/IP)
    // 2. Insert into Supabase bookings table
    // 3. Send WhatsApp confirmation via Meta Business API
    // 4. Send ops email via Resend

    const bookingId = crypto.randomUUID();

    const whatsappLink = `https://wa.me/971566071541?text=${encodeURIComponent(
      `Hi! I just submitted a booking request on your website. Wanted to confirm you received it and check on timing. 🙏`
    )}`;

    return NextResponse.json({
      booking_id: bookingId,
      whatsapp_deep_link: whatsappLink,
      message: 'Booking received successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
