# emjjkk/nextjs-discordbot-template

## Introduction

This is an open-source bot template built with Next.js App Router using Typescript and configured to run at the Edge using discord interactions. It's designed to be simple to setup and deploy, you should be able to get started in less than 5 minutes! It also has Supabase utils in-built and ready to go.

## Why Next.js (instead of Express, serverless, or Cloudflare Workers)?

Next.js offers the perfect sweet spot between performance, developer experience, and flexibility—making it an underrated powerhouse for building modern Discord bots. Unlike traditional setups with Express or pure serverless functions, Next.js gives you full routing, middleware, and edge deployment all in one cohesive framework. You can handle Discord's interaction webhooks directly through API routes using the new App Router and deploy them globally as edge functions with Vercel—no cold starts, no maintenance. Compared to Cloudflare Workers, you get better DX (TypeScript, file-based routing, full-stack components) without vendor lock-in or esoteric tooling. Plus, you can build out a complete dashboard, registration tools, or admin panels with Tailwind + React—all within the same project. It's full-stack serverless done right, optimized for command-based bots that live on the edge.

## Getting Started

1. Clone the repo. This is a template repository so you can click the green "Use this template" button on GitHub to create your own repo!
2. Run `npm install` to install dependencies
3. Create a new [discord application](https://discord.com/developers/applications). In the Bot settings of your Discord application, enable the Message Content intent. Take note of your Application ID, Discord Token, and Public Key.
4. Create a new [Supabase project](https://supabase.com/dashboard/projects). Take note of your Supabase URL and Anon Key
5. Copy the contents of `.env.example` to a new `.env.local` file and fill it out with the credentials mentioned above.

## Slash Commands

This template is built around Discord's slash command system using interactions, not bots that rely on long-running websocket gateways. Slash commands are defined in `@/lib/discord/commands.ts`, and handled inside the `/api/interactions` route. You can register new commands by extending the exported list in and running `@/scripts/register-commands`.

## Supabase

Supabase is used for database access and auth. This template includes pre-configured Supabase client utils with type-safe support. You can use it to store settings, user data, or logs tied to Discord user IDs, all using PostgreSQL on the edge.

The Supabase utils found in this template are similar to those implemented in the [Supabase starter for NextJS](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

## Deployment

Just push to GitHub and deploy to Vercel. This template is already configured to run on the edge, and routes are compatible with Vercel's edge functions out of the box. Make sure your env variables are set correctly in Vercel's dashboard. After deploying, paste your live `/api/interactions` URL into the Discord developer portal under "Interactions Endpoint URL".

## FAQs

**Q: Can I use this without Supabase?**  
A: Yes. Supabase is optional—you can remove it entirely and use your own database or none at all.

**Q: Can I deploy this to something other than Vercel?**  
A: Yep, but the edge runtime is optimized for Vercel. For Cloudflare or Netlify, you may need to adjust runtime configs.