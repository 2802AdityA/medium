import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string
}

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="flex justify-center mt-6">
            <div className="flex flex-col md:w-2/5">
                <div className="inline-flex gap-2">
                    <Avatar
                        name={authorName} />
                    <div className="flex justify-center items-center gap-2 font-light">{authorName} <span className="text-sm text-slate-500 "> {publishedDate}</span></div>

                </div>
                <div className="font-semibold text-xl mt-4">{title}</div>
                <div className="mt-1 line-clamp-2 font-light">{content}</div>
                <div className="mt-6 text-sm text-slate-500">{`${Math.ceil(content.length / 100)} min read`}</div>
                <div className="mt-10 h-0.5 bg-slate-300"></div>
            </div>
        </div>
    </Link>
}

