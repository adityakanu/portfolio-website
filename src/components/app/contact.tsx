import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { GitHubLogoIcon, LinkedInLogoIcon, RocketIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

export function Contact() {

    return (
        <main className="flex items-center justify-center pb-10">
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" className="gap-3">Get in touch <RocketIcon /></Button>
                </DrawerTrigger>
                <GitHubLogoIcon className="w-5 h-5 ml-3"/>
                <LinkedInLogoIcon className="w-5 h-5 ml-3" />
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Mail Me</DrawerTitle>
                            <DrawerDescription>Send me an email with your message.</DrawerDescription>
                        </DrawerHeader>

                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                        </div>

                        <DrawerFooter className="mt-4">
                            <Button>Send</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </main>
    )
}
