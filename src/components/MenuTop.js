import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';


export const MenuTop = () => {
    return (
        <div className="flex space-x-12  ml-5">
            <div className="inline-block ">
            <img
                    src={Logo}
                    alt="logo"
                    className="h-10 w-10"                  
                  />
            </div>
            <div className="space-x-6 space-y-2">
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white" to="/">Home</Link>
                </div>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white"  to="/new-movie">Ultumos lanzamientos</Link>
                </div>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white"  to="/popular">Populaes</Link>
                </div>
                <div className="inline-block">
                    <Link className="text-gray-300 hover:text-white"  to="/">Bucador</Link>
                </div>
            </div>
            
        </div>
    )
}
