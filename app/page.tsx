'use client'

import { useEffect, useState } from 'react'

export default function InvitePage() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_APPLICATION_ID
  const permissions = 8 // Admin
  const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&scope=bot%20applications.commands`
  
  // Test to see whether you're actually working on the bot or just viewing the template's homepage
  // You can remove this when you don't need it anymore

  const [isDevelopment, setIsDevelopment] = useState<boolean | null>(null)
  
  useEffect(() => {
    const prodDomain = 'nextjs-discordbot-template.vercel.app'
    const currentDomain = window.location.hostname
    setIsDevelopment(currentDomain !== prodDomain)
  }, [])

  if (isDevelopment === null) return null

  // End of test

  return (
    <>
      {isDevelopment ? (
        <main>Application is under development</main>
      ) : (
        <main>Viewing documentation site</main>
      )}
    </>
  )
}
