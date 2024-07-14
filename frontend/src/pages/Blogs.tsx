import { AppBar, BlogCard, BlogsSkeleton } from "../components"
import { useBlogs } from "../hooks"


export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <AppBar />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />

        </div>
    }

    return <div>
        <AppBar />

        <div>
            {
                blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate={"5th June 2020"} />
                )
            }

        </div>
    </div>
}