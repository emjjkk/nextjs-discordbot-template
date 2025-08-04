import { NextRequest, NextResponse } from 'next/server'
import { verifyKey } from 'discord-interactions'
import { handleCommand } from '@/lib/discord/commands'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const signature = req.headers.get('x-signature-ed25519')!
  const timestamp = req.headers.get('x-signature-timestamp')!
  const rawBody = await req.text()

  const isValid = verifyKey(
    rawBody,
    signature,
    timestamp,
    process.env.DISCORD_PUBLIC_KEY!
  )

  if (!isValid) return new NextResponse('Invalid request signature', { status: 401 })

  const interaction = JSON.parse(rawBody)

  if (interaction.type === 1) {
    return NextResponse.json({ type: 1 }) // PING
  }

  return await handleCommand(interaction)
}
