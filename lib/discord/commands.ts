import type { APIChatInputApplicationCommandInteraction } from 'discord-api-types/v10'

export async function handleCommand(interaction: APIChatInputApplicationCommandInteraction) {

  const { name } = interaction.data

  if (name === 'ping') {
    return new Response(
      JSON.stringify({
        type: 4,
        data: {
          content: '🏓 Pong!',
        },
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  return new Response('Unknown command', { status: 400 })
}
