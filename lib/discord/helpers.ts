export async function getUserProfile(userId: string, guildId: string) {
  const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}/members/${userId}`, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    },
  })
  return res.json()
}

export async function getAllGuildMembers(guildId: string) {
  const res = await fetch(`https://discord.com/api/v10/guilds/${guildId}/members?limit=1000`, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    },
  })
  return res.json()
}
