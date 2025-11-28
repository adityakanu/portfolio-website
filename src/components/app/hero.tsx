'use client'

import ThemeSwitch from "./ThemeSwitcher";


export default function Hero() {
    return (
        <main className="p-4 flex flex-col mt-24 max-w-4xl">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                    Aditya Kanu
                </h1>

                <div className="space-y-4">
                    <p className="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold bg-secondary text-secondary-foreground border-2 border-border shadow-neobrutal-sm mr-2">
                            Associate Software Development Engineer
                        </span>
                        at <span className="font-bold text-primary">Zscaler</span>
                    </p>

                    <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed">
                        Did my <span className="font-bold text-foreground">B.Tech</span> in <span className="font-bold text-foreground">Electronics and Instrumentation Engineering</span> at the <a href="https://nita.ac.in/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground">National Institute of Technology Agartala</a>.
                    </p>

                    <div className="flex items-center space-x-2 text-sm md:text-base">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-background border-2 border-border rounded-lg shadow-neobrutal-sm">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="font-sans font-medium text-foreground">
                                Open to remote opportunities
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}