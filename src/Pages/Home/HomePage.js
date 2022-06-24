import React from 'react';
import Login from '../Login';
import Register from '../Register';
import Banner from './Banner';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Login></Login>
            <Register></Register>
            
        </div>
    );
};

export default HomePage;