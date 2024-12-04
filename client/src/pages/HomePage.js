import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/NavBar';

const HomePage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const username = searchParams.get('username');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token || !username) {
            setError("Authentication data is missing.");
        } else {
            console.log(`Authenticated as ${username} with token: ${token}`);
        }
    }, [token, username]);

    if (error) {
        return <div className="p-8 text-red-500">{error}</div>;
    }

    return (
        <div>
          <Navbar />
            <h1 className="text-2xl">Welcome, {username}!</h1>
            <p>You are successfully authenticated with GitHub.</p>
        </div>
    );
};

export default HomePage;