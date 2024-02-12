'use client'

import { OpenInNewWindowIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Nav() {
    return (
        <nav className="flex mx-auto font-syne text-lg w-full p-4 bg-slate-500/20 rounded-xl items-center ">
            <div className='flex space-x-6'>
                <Link href="/about" className='ml-5'>About</Link>
                <Link href="blog.adityakanu.com">Blog</Link>
                <Link href="/project">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <Link href="/resume" className='ml-auto mr-5'>
                <Button variant="outline">Resume <OpenInNewWindowIcon /> </Button> 
            </Link>
        </nav>
    )
}