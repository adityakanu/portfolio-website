'use client'

import ThemeSwitch from "./ThemeSwitcher"

export default function Nav() {
    return (
        <nav className="flex justify-between items-center px-5 ">
            <h3 className="text-2xl font-tillana">आ. क.</h3>
            <div className="rounded-full bg-neo-light dark:bg-neo-dark shadow-neo-shadow-light dark:shadow-neo-shadow-dark  h-12 w-12 flex items-center justify-center "><ThemeSwitch/></div>
        </nav>
    )
}