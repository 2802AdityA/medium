import { Avatar } from "./Avatar"

export const Author = ({ name }: { name: string }) => {

    return <div className="col-span-4">
        <div>Author</div>
        <div className="inline-flex ">

            <Avatar name={name} />
            <div>{name}</div>
        </div>
    </div>
}