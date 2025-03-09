import React from "react";
import Navbar from "../components/NavBar";
import useRepo from "../hooks/uesRepo";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { repos, error } = useRepo();
  const { uname, username, avatarUrl } = useAuth();

  if (error) return <p className="text-red-500">{error}</p>;

  // Split repositories into two halves
  const midIndex = Math.ceil(repos.length / 2);
  const firstHalf = repos.slice(0, midIndex);
  const secondHalf = repos.slice(midIndex);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col pl-[5rem] pr-[5rem] pt-[2rem] pb-[3rem]">
        {/* Profile Image */}
        <div className="flex justify-items-start items-center">
          <div className="p-[2rem]">
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="Profile"
                className="w-[17rem] h-[17rem] rounded-full ml-2 border border-gray-300"
              />
            )}
          </div>

          <div>
            <p className="text-3xl font-semibold">{uname}</p>
            <p className="text-2xl text-gray-500">{username}</p>
          </div>
        </div>

        <div className="">
          <div className="max-w-8xl w-full mx-auto ">
            <div className="flex gap-x-8">
              {/* First Column */}
              <div className="w-1/2">
                <ul className="space-y-6">
                  {firstHalf.map((repo) => (
                    <li
                      key={repo.id}
                      className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold"
                      >
                        {repo.name}
                      </a>
                      <p className="text-sm text-gray-600 mb-2">
                        {repo.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        {repo.language || "N/A"}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Second Column */}
              <div className="w-1/2">
                <ul className="space-y-6">
                  {secondHalf.map((repo) => (
                    <li
                      key={repo.id}
                      className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold"
                      >
                        {repo.name}
                      </a>
                      <p className="text-sm text-gray-600 mb-2">
                        {repo.description}
                      </p>
                      <div className="text-xs text-gray-500">
                        {repo.language || "N/A"}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
