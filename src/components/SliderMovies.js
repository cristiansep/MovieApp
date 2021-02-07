import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Loading } from './Loading';

export const SliderMovies = (props) => {
    
    const {movies} = props;
    
    if(movies.loading || !movies.result){
        return <Loading/>;
    }

    const {results} =  movies.result



    const backdropPath = `https://image.tmdb.org/t/p/original`;

    
    return (
        <div>
            <Carousel autoPlay infiniteLoop  showThumbs={false} showArrows={false} showStatus={false}>
                {
                    results.map(movie => 
                        <div key={movie.id}>
                            <img 
                            className="h-md" 
                            src={`${backdropPath}${movie.backdrop_path}`} 
                            alt="movies"
                            />
                             <p className="legend">{movie.overview}</p>
                        </div>      
                    )
                }
            </Carousel>
        </div>
    )
}
