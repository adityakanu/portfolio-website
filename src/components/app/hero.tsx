'use client'

import ThemeSwitch from "./ThemeSwitcher";


export default function Hero() {
    return (
        <main className="p-4 flex flex-col mt-24 max-w-4xl">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-syne font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Aditya Kanu
                </h1>
                
                <div className="space-y-4">
                    <p className="text-lg md:text-xl font-mont text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-2">
                            Software Development Intern
                        </span>
                        at <span className="font-semibold text-gray-900 dark:text-white">Zscaler</span>
                    </p>
                    
                    <p className="text-base md:text-lg font-mont text-gray-600 dark:text-gray-400 leading-relaxed">
                        Did my <span className="font-semibold text-gray-900 dark:text-white">B.Tech in Electronics and Instrumentation Engineering</span> at the <span className="font-semibold text-gray-900 dark:text-white">National Institute of Technology Agartala</span>.
                    </p>
                    
                    <div className="flex items-center space-x-2 text-sm md:text-base">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-mont text-green-700 dark:text-green-300">
                                Open to remote opportunities
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}