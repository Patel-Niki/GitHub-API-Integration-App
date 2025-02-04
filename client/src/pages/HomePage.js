import React from 'react';
import Navbar from '../components/NavBar';
import useAuth  from '../hooks/useAuth';

const HomePage = () => {

    const { username } = useAuth();
 
    return (
        <div className="">
          <Navbar />
            <h1 className="text-2xl">Welcome, {username}!</h1>
            <p>You are successfully authenticated with GitHub.</p>
        </div>
    );
};

export default HomePage;