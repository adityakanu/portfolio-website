'use client'

import ThemeSwitch from "./ThemeSwitcher"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center px-5 py-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-primary">आ. क.</h3>
            <div className="rounded-full bg-background hover:bg-secondary transition-all h-10 w-10 flex items-center justify-center border-2 border-border shadow-neobrutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"><ThemeSwitch /></div>
        </nav>
    )
}