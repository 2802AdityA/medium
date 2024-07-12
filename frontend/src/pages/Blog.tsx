import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { Author, Content } from "../components";

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({ id: id || "" });
    if (loading) {
        return <div>loading</div>
    }
    return <div className="grid md:grid-cols-12 p-10 m-6 gap-8">
        <Content title={blog?.title || ""} content={blog?.content || ""} />
        <Author name={blog?.author.name || ""} />
        {/* <div>{JSON.stringify(blog)}</div> */}
    </div>

}