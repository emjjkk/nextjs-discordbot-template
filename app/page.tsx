'use client'
import { useEffect, useState } from 'react'

// Import content
import Example from '@/components/Example'
import Development from '@/components/Development'

export default function Index() {
  // When you're in development mode, these lines will create the invite link of YOUR discord bot,
  // According to the credentials you provided in .env.local
  const clientId = process.env.NEXT_PUBLIC_DISCORD_APPLICATION_ID
  const permissions = 8 // Admin
  let inviteUrl = ''
  if (clientId && permissions) inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${permissions}&scope=bot%20applications.commands`
  
  // This is just to see whether you're actually working on the bot or just viewing the template's homepage
  // You can remove this when you don't need it anymore
  const [isDevelopment, setIsDevelopment] = useState<boolean | null>(null)
  useEffect(() => {
    const prodDomain = 'nextjs-discordbot-template.vercel.app'
    const currentDomain = window.location.hostname
    setIsDevelopment(currentDomain !== prodDomain)
  }, [])
  if (isDevelopment === null) return null

  // And then we conditionally render page content accordingly to the test above, with steps to help you get started.
  // Feel free to remove this also and start afresh to build the web homepage of your own bot.
  return (<>{isDevelopment ? (<Development inviteUrl={inviteUrl}/>) : (<Example inviteUrl={inviteUrl}/>)}</>)
}
