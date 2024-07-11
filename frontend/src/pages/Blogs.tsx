import { AppBar, BlogCard } from "../components"
import { useBlogs } from "../hooks"


export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>loading..</div>
    }

    return <div>
        <AppBar />
        <div>
            {
                blogs.map(blog => <BlogCard authorName={"aditya"} title={"Multi-Line Truncation with Tailwind CSS Multi-Line Truncation with Tailwind CSS"} content={`Hi there, in this article I’ll show you guys how to truncate a text using an official Tailwind CSS plugin named line-clamp. Let jump into it. Let assume we have 3 cards which look like this. As you can see, their text length is not the same which is generally not what we want. So, in order to solve this, we could use the default truncate utility in Tailwind CSS. Let have a look how our card gonna looks like if we use this default property.`} publishedDate={"5th June 2020"} />
                )
            }

        </div>
    </div>
}