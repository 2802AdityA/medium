export const Content = ({ title, content }: { title: string, content: string }) => {
    return <div className="col-span-8">
        <div className="font-extrabold text-3xl md:text-4xl mb-8">{title}</div>
        <div className="text-xl">{content}</div>
    </div>
}