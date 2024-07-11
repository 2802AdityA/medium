import { Avatar } from "../Blog/"

export const AppBar = () => {
    return <div>

        <div className="flex flex-row justify-between px-5 py-5">
            <div className="text-lg">
                Medium
            </div>
            <div>
                <Avatar name="Aditya Singla" />
            </div>
        </div>
        <div className="h-0.5 bg-slate-200"></div>
    </div>
}