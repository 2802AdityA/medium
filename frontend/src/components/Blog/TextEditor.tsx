import { ChangeEvent } from "react"


export const TextEditor = ({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return <div className="mt-2">
        <div className="flex items-center justify-between border">
            <div className="my-2 bg-white rounded-lg w-full">
                <label className="sr-only">Publish Post</label>
                <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-2 text-sm text-gray-800 bg-white border-0 pt-2" placeholder="Write an article... " required></textarea>
            </div>

        </div>

    </div>
}