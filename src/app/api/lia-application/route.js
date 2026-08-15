import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAILERSEND_ENDPOINT = 'https://api.mailersend.com/v1/email';
const TO_ADDRESS = process.env.MAIL_TO || 'info@optitech-sverige.se';
const FROM_EMAIL = process.env.MAIL_FROM || '';
const FROM_NAME = process.env.MAIL_FROM_NAME || 'OptiTech';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip CR/LF so user input can't inject extra email headers.
const singleLine = (value) =>
  String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim();

export async function POST(request) {
  try {
    const form = await request.formData();

    // Honeypot: real users never fill this hidden field. Pretend success for bots.
    if (singleLine(form.get('company'))) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = singleLine(form.get('name'));
    const email = singleLine(form.get('email'));
    const phone = singleLine(form.get('phone'));
    const education = singleLine(form.get('education'));
    const period = singleLine(form.get('period'));
    const message = String(form.get('message') ?? '').trim();
    const cv = form.get('cv');

    if (!name || !email || !EMAIL_REGEXP.test(email)) {
      return NextResponse.json({ error: 'A valid name and email are required.' }, { status: 400 });
    }

    const attachments = [];
    if (cv && typeof cv === 'object' && typeof cv.arrayBuffer === 'function') {
      const fileName = cv.name || 'cv';
      const isAcceptedType = ACCEPTED_EXTENSIONS.some((ext) =>
        fileName.toLowerCase().endsWith(ext)
      );
      if (!isAcceptedType) {
        return NextResponse.json(
          { error: 'Attachment must be a PDF, DOC, or DOCX.' },
          { status: 400 }
        );
      }
      if (cv.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: 'Attachment is too large.' }, { status: 400 });
      }
      const content = Buffer.from(await cv.arrayBuffer()).toString('base64');
      attachments.push({ content, filename: fileName, disposition: 'attachment' });
    }

    const apiKey = process.env.MAILRESEND_API_KEY || process.env.MAILERSEND_API_KEY;
    if (!apiKey || !FROM_EMAIL) {
      console.error('LIA application: missing MAILRESEND_API_KEY or MAIL_FROM.');
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
    }

    const bodyLines = [
      `Namn: ${name}`,
      `E-post: ${email}`,
      ...(phone ? [`Telefon: ${phone}`] : []),
      ...(education ? [`Utbildning: ${education}`] : []),
      ...(period ? [`Period: ${period}`] : []),
      '',
      message || '(inget meddelande)',
    ];

    const emailResponse = await fetch(MAILERSEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        from: { email: FROM_EMAIL, name: FROM_NAME },
        to: [{ email: TO_ADDRESS }],
        reply_to: { email },
        subject: `LIA/praktik-ansökan: ${name}`,
        text: bodyLines.join('\n'),
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!emailResponse.ok) {
      const detail = await emailResponse.text();
      console.error('LIA application: MailerSend error', emailResponse.status, detail);
      return NextResponse.json({ error: 'Could not send application.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('LIA application error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
