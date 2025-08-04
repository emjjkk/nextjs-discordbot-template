// app/invite/page.tsx
export default function InvitePage() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_APPLICATION_ID
  const permissions = 8 // Admin
  const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&scope=bot%20applications.commands`

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Add Our Discord Bot</h1>
      {clientId ? (
        <a
          href={inviteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Invite Bot
        </a>
      ) : (
        <p className="text-red-500">Missing Discord Client ID</p>
      )}
    </main>
  )
}
