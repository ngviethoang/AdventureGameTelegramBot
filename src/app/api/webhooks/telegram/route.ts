import { handleMessage } from '@/lib/message_handler';
import { sendPhoto, sendMessage } from '@/lib/telegram';
import { NextResponse, NextRequest } from 'next/server';

// webhook event handler
export async function POST(req: NextRequest) {
  const body = await req.json();
  // console.log(JSON.stringify(body, null, 2));

  // send back a response// extract sender's ID
  const senderId = body.message.from.id;

  // // extract the message
  const message = body.message.text;
  // console.log('message', message);

  await handleMessage(senderId, message);

  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}
