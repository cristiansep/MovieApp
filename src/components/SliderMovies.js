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


    
    return (
        <div>
            <Carousel autoPlay infiniteLoop  showThumbs={false} showArrows={false} showStatus={false} >
                {
                    results.map(movie => 
                        <div key={movie.id}>
                        <Movie key={movie.id} movie={movie}/>
                        <p className="legend" >{movie.overview}</p>   
                        </div>
                    )
                }
            </Carousel>
        </div>
    )
}



function Movie(props) {

    const {movie: {backdrop_path}} = props;

    const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (

        <div className="h-md bg-cover bg-no-repeat bg-top" style={{backgroundImage: `url('${backdropPath}')`}} />

    )
}
