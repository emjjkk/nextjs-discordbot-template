"use client"
import { RiSupabaseLine, RiNextjsLine, RiDiscordFill } from "react-icons/ri";

/* ----------------------------------------------------------------------------------
    This is just a component for what you see when you run the development server 
    It also helps to check that your environment variables are configured correctly.
    Once you're done with that, you can delete this component
------------------------------------------------------------------------------------- */

type DevelopmentProps = {inviteUrl: string;};
export default function Development({ inviteUrl }: DevelopmentProps) {
  
  const invite = inviteUrl;
  
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-32">
        <div className="flex items-center gap-2 mb-2 text-3xl">
          <RiDiscordFill/><p className="text-sm text-slate-500">+</p>
          <RiNextjsLine/><p className="text-sm text-slate-500">+</p>
          <RiSupabaseLine/>
        </div>
        <h1 className="text-2xl mb-2 font-bold">NextJS + Supabase Discord Bot Template</h1>
        <p className="text-md">A minimal template to build a discord bot that can be deployed to Vercel.</p>
        <p className="text-md py-6">-</p>
        {invite == "" ? (
          <>
            <p className="text-sm text-slate-500">Fill out your supabase and discord credentials in .env.local to get started</p>
            <p className="text-sm text-slate-500">When that's done, you'll see a button here to invite your discord bot.</p>
          </>
        ) : (
          <>
            <a href={invite}><button className="px-4 py-2 text-sm rounded-sm bg-blue-800 text-white mb-3">Invite your discord bot</button></a>
            <p className="text-sm text-slate-500 text-center">You're all set! Your development interactions endpoint is<br/><span className="font-mono">https://{window.location.hostname}/api/interactions</span></p>
            <p className="text-sm text-slate-500">Learn more on how to get started <a href="https://nextjs-discordbot-template.vercel.app/#docs" className="text-blue-600">here</a>. Happy coding!</p>
          </>
        )}
    </main>
  );
}
