import { Avatar } from "./Avatar"

export const Author = ({ name }: { name: string }) => {

    return <div className="lg:col-span-3">
        <div className="text-md">Author</div>
        <div className="inline-flex space-x-4 justify-center items-center my-2">

            <Avatar name={name} />
            <div className="text-2xl font-bold">{name}</div>
        </div>
    </div>
}