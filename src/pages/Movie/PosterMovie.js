import React from 'react';

export const PosterMovie = (props) => {

    const { image } = props;

    
    const posterPath = `https://image.tmdb.org/t/p/original${image}`;
  
    return <div className="bg-center xs:bg-center bg-contain bg-no-repeat h-mvp100" style={{ backgroundImage: `url('${posterPath}')` }} />;
}
