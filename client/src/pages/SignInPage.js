import React from "react";
import { FaGithub } from "react-icons/fa6";

const SignInPage = () => {
    const handleSignIn = () => {
        window.location.href = 'http://localhost:3001/auth/github';
    }
    return (
        <>
            <div className="flex flex-col items-center p-8">
                <FaGithub className="w-12 h-12 mb-8"/>
                <button
                    onClick={handleSignIn}
                    className="bg-green-700 w-[15rem] p-1 rounded-md text-white font-semibold text-sm">
                        Sign in with GitHub
                </button>
            </div>
        </>
    )
}

export default SignInPage;