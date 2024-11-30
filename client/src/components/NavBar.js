import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { VscChevronDown } from "react-icons/vsc";
import { GoIssueOpened } from "react-icons/go";
import { GoGitPullRequest } from "react-icons/go";
import { GoInbox } from "react-icons/go";

const Navbar = () => {
    return (
        <>
            <div className="bg-gray-50 p-4 border-b">
                <nav>
                    <div className="flow-root">
                        <div className="float-left flex space-x-4 items-center">
                            <button className="flex border p-1 rounded-md">
                                <FiMenu className="text-xl font-normal text-gray-500"/>
                            </button>
                            <FaGithub className="w-8 h-8"/>
                            <p className="text-sm font-semibold">Patel Niki</p>
                        </div>

                        <div className="float-right flex items-center">
                            <input 
                                type="text"
                                placeholder="Type to search"
                                className="border border-gray-300 p-[6px] 
                                        rounded-lg 
                                        bg-gray-50 
                                        text-sm 
                                        placeholder-gray-700 
                                        focus:outline-none 
                                        w-[15rem]"
                            />
                            <div className="h-5 border-l mx-4 border-gray-300"></div>
                            <button className="flex border p-[6px] rounded-md border-gray-300">
                                <GoPlus className="mr-4 text-lg text-gray-500"/>
                                <VscChevronDown className="text-lg"/>
                            </button>
                            <button className="border p-[6px] rounded-md border-gray-300 ml-2">
                                <GoIssueOpened className="text-lg text-gray-500"/>
                            </button>
                            <button className="border p-[6px] rounded-md border-gray-300 ml-2">
                                <GoGitPullRequest className="text-lg text-gray-500"/>
                            </button>
                            <button className="border p-[6px] rounded-md border-gray-300 ml-2">
                                <GoInbox className="text-lg text-gray-500"/>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;