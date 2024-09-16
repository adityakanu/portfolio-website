'use client'
import { ArrowRightIcon, CalendarIcon } from "@radix-ui/react-icons"
import { Link } from "next-view-transitions"
import { useEffect, useState } from 'react'
import { LinkPreview } from "../ui/link-preview"

interface BlogPost {
    title: string
    brief: string
    publishedAt: string
    slug: string
}

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await fetch('https://gql.hashnode.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
                            query Publication {
                                publication(host: "blog.adityakanu.com") {
                                    isTeam
                                    title
                                    posts(first: 10) {
                                        edges {
                                            node {
                                                title
                                                brief
                                                publishedAt
                                                slug
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                        variables: {
                            page: 1
                        }
                    }),
                })

                const data = await response.json()
                const posts = data.data.publication.posts.edges.map((edge: any) => edge.node)
                setBlogs(posts)
            } catch (error) {
                console.error('Error fetching blogs:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    return (
        <main className="p-4 flex flex-col mt-10">
            <h2 className="font-syne font-bold text-4xl">Blogs</h2>
            <div className="container mx-auto px-4 mt-4">
                {loading ? (
                    <p>Loading blogs...</p>
                ) : (
                    <>
                        <ul className="space-y-8">
                            {blogs.slice(0, 8).map((blog) => (
                                <li key={blog.slug} className="">
                                    <Link href={`https://blog.adityakanu.com/${blog.slug}`} target="_blank" className="block p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-foreground transition-colors">
                                            <LinkPreview url={`https://blog.adityakanu.com/${blog.slug}`} >
                                                {blog.title}
                                            </LinkPreview>
                                        </h3>
                                        {/* <p className="text-gray-600 mb-4">{blog.brief}</p> */}
                                        <div className="flex items-center text-sm text-gray-500">
                                            <CalendarIcon className="w-4 h-4 mr-2" />
                                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {blogs.length > 5 && (
                            <div className="mt-12 text-center">
                                <Link
                                    href="https://blog.adityakanu.com"
                                    className="flex items-center justify-center space-x-2 text-gray-600 hover:text-foreground transition-colors"
                                >
                                    Read More
                                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}


