import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { username, avatarUrl, error } = useAuth();

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="bg-gray-50 p-4 border-b">
        <nav>
          <div className="flow-root">
            <div className="float-left flex space-x-4 items-center">
              <button className="flex border p-1 rounded-md">
                <FiMenu className="text-xl font-normal text-gray-500" />
              </button>
              <FaGithub className="w-8 h-8" />
              <p className="text-sm font-semibold">{username}</p>
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
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="w-9 h-9 rounded-full ml-2 border border-gray-300"
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
