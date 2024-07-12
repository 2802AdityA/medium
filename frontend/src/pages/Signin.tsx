import { SigninInput } from "@ad1tya.28/common-medium"
import { AuthHeader, AuthForm } from "../components"
import { useState } from "react"

export const Signin = () => {
    const [signInInputs, setSignInInputs] = useState<SigninInput>({
        email: "",
        password: ""
    })
    return <div className="h-screen flex justify-center flex-col items-center">
        <div className="m-6 border-2 p-10 rounded-xl border-slate-300">
            <AuthHeader heading="Welcome" subheading="Don't have an account?" linkHead="Sign up" link="/signup" />
            <AuthForm type="signin" inputs={signInInputs} setInputs={setSignInInputs} buttonText="Sign in" />

        </div>
    </div>

}