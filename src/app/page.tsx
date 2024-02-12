'use client'
import About from "@/components/app/about";
import { Contact } from "@/components/app/contact";
import Hero from "@/components/app/hero";
import Nav from "@/components/app/nav";
import Projects from "@/components/app/project";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <main className="p-4">
      <Nav />
      {/* <Separator className="my-4" /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
