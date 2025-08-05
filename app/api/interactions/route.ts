import { NextRequest, NextResponse } from 'next/server'
import { verifyKey } from 'discord-interactions'
import { handleCommand } from '@/lib/discord/commands'

export const runtime = 'edge'

const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY!

export async function GET() {
  return new NextResponse('OK') // Or 405 if you wanna be strict
}

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('x-signature-ed25519')!
    const timestamp = req.headers.get('x-signature-timestamp')!
    const rawBody = await req.text()

    const isValid = await verifyKey(rawBody, signature, timestamp, PUBLIC_KEY)

    if (!isValid) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    console.log('[Discord] Signature:', signature)
    console.log('[Discord] Timestamp:', timestamp)
    console.log('[Discord] Raw body:', rawBody)
    console.log('[Discord] Public key:', PUBLIC_KEY)
    console.log('[Discord] Valid:', isValid)

    const interaction = JSON.parse(rawBody)

    // Respond to Discord PING
    if (interaction.type === 1) {
      return NextResponse.json({ type: 1 })
    }

    // Otherwise handle command
    return await handleCommand(interaction)
  } catch (err) {
    console.error('❌ Discord interaction error:', err)
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
