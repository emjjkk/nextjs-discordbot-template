export async function handleCommand(interaction: any) {
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
