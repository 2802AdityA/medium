import { Link } from "react-router-dom"

interface HeaderProps {
    heading: string,
    subheading: string,
    linkHead: string,
    link: string
}

export const AuthHeader = ({ heading, subheading, linkHead, link }: HeaderProps) => {
    return <div className="text-center md:px-20">
        <div className="text-3xl font-bold">{heading}</div>
        <div className="mt-2 text-slate-500">{subheading} <Link className="underline" to={link}>{linkHead}</Link></div>
    </div>
}