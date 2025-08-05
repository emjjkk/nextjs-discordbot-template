"use client"
import { RiSupabaseLine, RiNextjsLine, RiDiscordFill } from "react-icons/ri";
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa6'

/* ----------------------------------------------------------------------------------
    This component is what shows when you visit the template's homepage.
    Nothing important here, go ahead and delete this file
------------------------------------------------------------------------------------- */

type ExampleProps = { inviteUrl: string; };
export default function Example({ inviteUrl }: ExampleProps) {
  const invite = inviteUrl;

  return (
    <>
      <main className="w-[100dvw] h-screen flex flex-col items-center justify-center relative text-center px-2">
        <div className="flex items-center gap-2 mb-2 text-3xl">
          <RiDiscordFill /><p className="text-sm text-slate-500">+</p>
          <RiNextjsLine /><p className="text-sm text-slate-500">+</p>
          <RiSupabaseLine />
        </div>
        <h1 className="text-2xl mb-2 font-bold">NextJS + Supabase Discord Bot Template</h1>
        <p className="text-md mb-5">A minimal template to build a discord bot that can be deployed to Vercel.</p>
        <div className="flex items-center gap-2">
          <a href={invite}><button className="px-4 py-2 text-sm rounded-sm bg-blue-800 text-white mb-3">Invite example discord bot</button></a>
          <a href='#docs'><button className="px-4 py-2 text-sm rounded-sm bg-black text-white mb-3">Get Started</button></a>
          <a href='https://github.com/emjjkk/nextjs-discordbot-template'><button className="px-4 py-2 text-sm rounded-sm bg-black text-white mb-3">Contribute on Github</button></a>
        </div>

        <p className="absolute bottom-0 w-full p-5 text-sm flex items-center justify-center gap-2">
          Developed with 😎 by Emmanuel Alabi.
          <a href=""><FaDiscord /></a>
          <a href="https://github.com/emjjkk"><FaGithub /></a>
          <a href="https://instagram.com/e.mjjkk"><FaInstagram /></a>
        </p>

      </main>
      <main id="docs" className="w-[100dvw] min-h-screen bg-slate-100 py-10 px-2">
        <div className="max-w-4xl mx-auto min-h-full md:flex gap-4">
          <div className="md:w-1/4">
            <h3 className="text-lg font-bold mb-5">Contents</h3>
            <ul>
              <a href="#introduction"><li className="text-sm mb-1">- Introduction</li></a>
              <a href="#why"><li className="text-sm mb-1">- Why NextJS?</li></a>
              <a href="#start"><li className="text-sm mb-1">- Getting Started</li></a>
              <a href="#slash-commands"><li className="text-sm mb-1">- Slash Commands</li></a>
              <a href="#supabase"><li className="text-sm mb-1">- Supabase</li></a>
              <a href="#deployment"><li className="text-sm mb-1">- Deployment</li></a>
              <a href="#faqs"><li className="text-sm mb-1">- FAQs</li></a>
            </ul>
          </div>
          <div className="md:w-3/4">
            <h1 id="introduction" className="text-2xl font-bold mb-5">Introduction</h1>
            <p className="text-md mb-5">This is an open-source bot template built with Next.js App Router using Typescript and configured to run at the Edge using discord interactions. It's designed to be simple to setup and deploy, you should be able to get started in less than 5 minutes! It also has Supabase utils in-built and ready to go.</p>
            <h1 id="why" className="text-2xl font-bold mb-5">Why Next.js (instead of Express, serverless, or Cloudflare Workers)?</h1>
            <p className="text-md mb-5">Next.js offers the perfect sweet spot between performance, developer experience, and flexibility—making it an underrated powerhouse for building modern Discord bots. Unlike traditional setups with Express or pure serverless functions, Next.js gives you full routing, middleware, and edge deployment all in one cohesive framework. You can handle Discord’s interaction webhooks directly through API routes using the new App Router and deploy them globally as edge functions with Vercel—no cold starts, no maintenance. Compared to Cloudflare Workers, you get better DX (TypeScript, file-based routing, full-stack components) without vendor lock-in or esoteric tooling. Plus, you can build out a complete dashboard, registration tools, or admin panels with Tailwind + React—all within the same project. It's full-stack serverless done right, optimized for command-based bots that live on the edge.</p>
            <h1 id="start" className="text-2xl font-bold mb-5">Getting Started</h1>
            <ul className="list-decimal">
              <li className="text-md mb-5" >Clone the repo. This is a template repository so you can click the green "Use this template" button on GitHub to create your own repo!</li>
              <li className="text-md mb-5" >Run <span className="font-mono bg-slate-300 p-1">npm install</span> to install dependencies</li> 
              <li className="text-md mb-5" >Create a new <a href="https://discord.com/developers/applications" className="text-blue-900">discord application</a>.  In the Bot settings of your Discord application, enable the Message Content intent. Take note of your Application ID, Discord Token, and Public Key.</li>
              <li className="text-md mb-5" >Create a new <a href="https://supabase.com/dashboard/projects" className="text-blue-900">Supabase project</a>. Take note of your Supabase URL and Anon Key</li>
              <li className="text-md mb-5">Copy the contents of <span className="font-mono p-1 bg-slate-300">.env.example</span> to a new <span className="font-mono p-1 bg-slate-300">.env.local</span> file and fill it out with the credentials mentioned above.</li>
            </ul>
            <section id="slash-commands" className="mb-5">
              <h1 className="text-2xl font-bold mb-5">Slash Commands</h1>
              <p className="text-md">This template is built around Discord’s slash command system using interactions, not bots that rely on long-running websocket gateways. Slash commands are defined in <code className="bg-slate-300 p-1 font-mono">@/lib/discord/commands.ts</code>, and handled inside the <code className="bg-slate-300 px-1 font-mono">/api/interactions</code> route. You can register new commands by extending the exported list in and running <span className="font-mono p-1 bg-slate-300">@/scripts/register-commands</span>.</p>
            </section>
            <section id="supabase" className="mb-5">
              <h1 className="text-2xl font-bold mb-5">Supabase</h1>
              <p className="text-md mb-5">Supabase is used for database access and auth. This template includes pre-configured Supabase client utils with type-safe support. You can use it to store settings, user data, or logs tied to Discord user IDs, all using PostgreSQL on the edge.</p>
              <p className="text-md">The Supabase utils found in this template are similar to those implemented in the <a href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs" className="text-blue-500">Supabase starter for NextJS</a></p>
            </section>
            <section id="deployment" className="mb-5">
              <h1 className="text-2xl font-bold mb-5">Deployment</h1>
              <p className="text-md">Just push to GitHub and deploy to Vercel. This template is already configured to run on the edge, and routes are compatible with Vercel’s edge functions out of the box. Make sure your env variables are set correctly in Vercel’s dashboard. After deploying, paste your live `/api/interactions` URL into the Discord developer portal under "Interactions Endpoint URL".</p>
            </section>
            <section id="faqs" className="mb-5">
              <h1 className="text-2xl font-bold mb-5">FAQs</h1>
              <p className="text-md mb-2"><strong>Q: Can I use this without Supabase?</strong></p>
              <p className="text-md mb-4">A: Yes. Supabase is optional—you can remove it entirely and use your own database or none at all.</p>
              <p className="text-md mb-2"><strong>Q: Can I deploy this to something other than Vercel?</strong></p>
              <p className="text-md mb-4">A: Yep, but the edge runtime is optimized for Vercel. For Cloudflare or Netlify, you may need to adjust runtime configs.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
