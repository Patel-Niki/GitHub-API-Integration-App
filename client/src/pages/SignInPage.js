import { FaGithub } from "react-icons/fa6";

const SignInPage = () => {
    return (
        <>
            <div className="flex flex-col items-center p-8">
                <FaGithub className="w-12 h-12" />

                <p className="text-2xl mt-7">Sign in to GitHub</p>

                <div className="flex flex-col mt-4 border p-5 rounded-md bg-gray-50 w-[18rem]">
                    <label className="text-sm mb-2 text-left">Username or email address</label>
                    <input type="text" className="border p-1 rounded-md mb-4" />

                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm text-left">Password</label>
                        <label className="text-xs text-blue-500 cursor-pointer">Forgot password?</label>
                    </div>
                    <input type="text" className="border p-1 rounded-md mb-4" />

                    <button className="bg-green-700 w-full p-1 rounded-md text-white font-semibold text-sm">Sign in</button>
                </div>
            </div>
        </>
    )
}

export default SignInPage;