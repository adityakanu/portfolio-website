'use client'

import { CommitIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Contacts() {
    return (
        <main className="p-4 flex flex-col mt-24 items-center">
            <Separator />
            <div className="flex items-center justify-between w-full md:max-w-2xl">
                <Link href="mailto:official.adityakanu@gmail.com" className="font-serif p-4 flex-1 hover:text-primary transition-colors">hi@adityakanu.com</Link>
                <CommitIcon className="h-5 w-5" />
                <div className="flex space-x-2 items-center flex-1 justify-end">
                    <Link href="https://github.com/adityakanu"><GitHubLogoIcon className="h-5 w-5" /></Link>
                    <Link href="https://www.linkedin.com/in/adityakanu"><LinkedInLogoIcon className="h-5 w-5" /></Link>
                    <Link href="https://x.com/adityakanu_x"><TwitterLogoIcon className="h-5 w-5" /></Link>
                </div>
            </div>

        </main>
    );
}