import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()))
  })
}
 
async function main() {
  try {
    const DISCORD_TOKEN = await ask('Enter your Discord Bot Token: ')
    const DISCORD_APPLICATION_ID = await ask('Enter your Discord Application ID: ')

    if (!DISCORD_TOKEN || !DISCORD_APPLICATION_ID) {
      throw new Error('Both token and application ID are required!')
    }

    // EDIT THE COMMANDS HERE 
    // [Don't edit code above this line]

    const commands = [
      {
        name: 'ping',
        description: 'Replies with Pong!',
      },
    ]

    // [Don't edit code below this line]

    const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN)

    console.log('Registering slash commands...')

    await rest.put(
      Routes.applicationCommands(DISCORD_APPLICATION_ID),
      { body: commands }
    )

    console.log('✅ Slash commands registered!')

  } catch (err) {
    console.error('❌ Error registering commands:', err)
  } finally {
    rl.close()
  }
}

main()
