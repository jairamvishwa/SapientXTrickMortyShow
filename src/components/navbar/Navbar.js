import React from 'react';
import web from '../../images/logo.jpg';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="brand">
                    <img src={web} alt="Logo" />
                </div>  
                <h1 className="title"><small>Characters of</small>Rick and Morty Show</h1>
            </div>
        </>
    );
}

export default Navbar;