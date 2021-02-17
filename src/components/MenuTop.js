import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo2.svg';


export const MenuTop = () => {
    return (
        <div className="flex space-x-12 ml-5">
            <div className="inline-block" style={{zIndex: 1}}>
                <Link to="/">
                <img
                    src={Logo}
                    alt="logo"
                    className="h-10 w-10"                  
                  />
                </Link>
            
            </div>
            <div className="space-x-6 space-y-2" style={{zIndex: 1}}>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
                </div>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white"  to="/new-movie">Ultimos lanzamientos</Link>
                </div>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white"  to="/popular">Populaes</Link>
                </div>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white"  to="/search">Bucador</Link>
                </div>
            </div>
            </div>
    )
}
