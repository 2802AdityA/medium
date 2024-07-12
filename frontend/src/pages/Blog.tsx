import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { AppBar, Author, Content } from "../components";

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({ id: id || "" });
    if (loading) {
        return <div>loading</div>
    }
    return <div>
        <AppBar />
        <div className="grid lg:grid-cols-12 lg:p-10 m-2 p-4 lg:m-6 gap-8">
            <Content title={blog?.title || ""} content={blog?.content || ""} />
            <Author name={blog?.author.name || ""} />
        </div>
    </div>

}