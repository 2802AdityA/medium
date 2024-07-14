import { useNavigate } from "react-router-dom";
import { LabelInput } from "."
import axios from "axios";
import { SigninInput, SignupInput } from "@ad1tya.28/common-medium";
import { Dispatch, SetStateAction } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type AuthInputs = SigninInput | SignupInput;
type AuthType = "signup" | "signin";

interface AuthProps {
    buttonText: string
    inputs: AuthInputs,
    type: AuthType,
    setInputs: Dispatch<SetStateAction<AuthInputs>>
}

export const AuthForm = ({ buttonText, inputs, type, setInputs }: AuthProps) => {
    const navigate = useNavigate()

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, inputs)
            const jwt: string = response.data.token;

            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (e) {
            console.log(`Error: ${e}`);
        }
    }


    return <div>
        <div className="mt-8">
            {type === "signup" ? <LabelInput label="Username" type="text" placeholder="Enter your name"
                onChange={e => {
                    setInputs({
                        ...inputs,
                        name: e.target.value
                    })
                }} /> : null}
            <LabelInput label="Email" type="email" placeholder="Enter your email" onChange={e => {
                setInputs({
                    ...inputs,
                    email: e.target.value
                })
            }} />
            <LabelInput label="Password" type="password" placeholder="Enter your password" onChange={e => {
                setInputs({
                    ...inputs,
                    password: e.target.value
                })
            }} />

        </div>
        <div className="mt-4">
            <button onClick={sendRequest} className="w-full bg-black text-white p-2 rounded-xl">{buttonText}</button>
        </div>
    </div>

}