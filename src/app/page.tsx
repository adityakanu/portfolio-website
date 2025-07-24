'use client'
import Blog from "@/components/app/blog";
import Contacts from "@/components/app/contacts";
import { Experience } from "@/components/app/experience";
import Hero from "@/components/app/hero";
import Nav from "@/components/app/nav";
import Projects from "@/components/app/project";
import SpotifyPlaylist from "@/components/app/spotify-playlist";

export default function Home() {
  return (
    <main className="p-4 md:max-w-screen-md  mx-auto">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Blog />
      <SpotifyPlaylist />
      <Contacts />
    </main>
  );
}
