import React from 'react';
import loader from '../assets/img/25 (1).gif'

export const Loading = () => {


    return (
        <div className="flex items-center justify-center justify-items-center mt-48">
             <img 
                 className="h-5" 
                src={loader} 
                alt="movies"
            />
        </div>
    )
}
