import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/about"><a>About</a></Link></li>
            </ul>
        </div>
    );
};

export default Navigation;