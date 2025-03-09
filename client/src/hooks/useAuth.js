import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const username = searchParams.get("username");
  const [error, setError] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uname, setName] = useState(null);

  useEffect(() => {
    if (!token || !username) {
      setError("Authentication data is missing.");
    } else {
      console.log(`Authenticated as ${username} with token: ${token}`);

      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.avatar_url) {
            setAvatarUrl(data.avatar_url);
          }
          if (data.name) {
            setName(data.name);
          }
        })
        .catch(() => setError("Failed to fetch profile data."));
    }
  }, [token, username]);

  return { token, username, uname, avatarUrl, error };
};

export default useAuth;
