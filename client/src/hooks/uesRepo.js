import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useRepo = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const username = searchParams.get("username");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token || !username) {
      setError("Authentication data is missing!");
      return;
    }

    const fetchRepo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories.");
        }
        const data = await response.json();
        setRepos(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchRepo();
  }, [token, username]);
  return { repos, error };
};

export default useRepo;
