import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h2 className='notfound-header'>Not Found!</h2>
            <div className='notFound'>
                <h2>Sorry the page you are looking for is not found!</h2>
                <h1>Try another Route.</h1>
            </div>
        </div>
    );
};

export default NotFound;