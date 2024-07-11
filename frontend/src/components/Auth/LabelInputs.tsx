
import { ChangeEvent } from "react"



interface LabelInputType {
    label: string,
    type: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LabelInput = ({ label, type, placeholder, onChange }: LabelInputType) => {
    return <div className="">
        <div className="mt-6">
            <label className="text-md font-semibold" >{label}</label>
        </div>
        <div className="my-2">
            <input className="w-full p-2 border-2 border-slate-300 rounded-xl" placeholder={placeholder} onChange={onChange} type={type} />
        </div>
    </div>
}