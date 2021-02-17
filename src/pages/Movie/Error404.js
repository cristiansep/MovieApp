import React from 'react';
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <>

        <div className="h-calc w-screen flex justify-center content-center flex-wrap">
            <div className="flex-col">
                  <p className="font-sans error-text text-black text-9xl text-center font-bold">404</p> 
                  <p className="font-sans error-text text-black text-6xl text-center mt-10 font-bold">Página no encontrada</p>
                  <Link to="/">
                    <p className="font-sans error-text text-gray-900 text-opacity-50 text-xl text-center mt-10 font-normal">Volver al inicio</p>
                </Link>
            </div>
     
        </div>

      
            
        </>
    )
}
