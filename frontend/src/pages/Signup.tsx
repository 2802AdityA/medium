import { useState } from "react"
import { SignupInput } from "@ad1tya.28/common-medium"
import { AuthHeader, AuthForm } from "../components"

export const Signup = () => {
    const [signupInputs, setSignupInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    return <div className="h-screen flex justify-center flex-col items-center">
        <div className="m-6 border-2 p-10 rounded-xl border-slate-300">
            <AuthHeader heading="Create an account" subheading="Already have an account?" linkHead="Sign in" link="/signin" />
            <AuthForm type="signup" inputs={signupInputs} setInputs={setSignupInputs} buttonText="Sign up" />

        </div>
    </div>

}