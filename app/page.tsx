
export default function InvitePage() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_APPLICATION_ID
  const permissions = 8 // Admin
  // const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&scope=bot%20applications.commands`
  const isDevelopment = !(window.location.hostname == 'nextjs-discordbot-template.vercel.app')

  return (
    <>
      {isDevelopment ? (
        <main> Application is under development </main>
      ) : (
        <main> Veiwing documentation site </main>
      )}
    </>
  )
}
