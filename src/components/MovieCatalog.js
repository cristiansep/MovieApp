import React from 'react';
import {Link} from 'react-router-dom';


export const MovieCatalog = (props) => {
    
    const {movies: {results}} = props;

    return results.map(movie => (
        <div key={movie.id} className="flex justify-center mt-10">
            <MovieCard movie={movie}/>
        </div>
    ))
}


function MovieCard(props) {
    const {movie: {id,title, poster_path}} = props;
 
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;


    return (

        <Link to={`/movie/${id}`}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden md:w-80">
          <img className="lg:h-48 md:h-36 object-cover object-center h-movie w-full"  alt={title} src={posterPath}  />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center">{title}</h1>
          </div>
        </div>
        </Link>

    )
}





