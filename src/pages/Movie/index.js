import React from 'react';
import { useParams } from "react-router-dom";
import { Loading } from '../../components/Loading';
import { API, URL_API } from '../../config';
import useFetch from '../../hooks/useFetch';
import { MovieInfo } from './MovieInfo';
import { PosterMovie } from './PosterMovie';
import { RenderMovie } from './RenderMovie';

export const Movie = () => {
    const { id } = useParams();

    const movieInfo = useFetch(
        `${URL_API}/movie/${id}?api_key=${API}&language=es-ES`
      );
    
      if (movieInfo.loading || !movieInfo.result) {
        return <Loading />;
      }

      const {backdrop_path, poster_path} = movieInfo.result;


      const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  

    return (
      <div 
      className="h-calc bg-no-repeat bg-center bg-cover"
      style={{backgroundImage: `url('${backdropPath}')`}}
      >
   
          <div className="absolute top-0 left-0 h-mvp100 w-full bg-black opacity-60 "/>
            
              <div className="grid md:grid-cols-2 xs:grid-cols-1 h-h100 items-center">
              <div className="h-mvp z-10">
                            <PosterMovie image={poster_path}/>
                      
                  </div>
                  <div className="h-mvp text-white z-10 mt-20 ml-0"> 
                      <MovieInfo movieInfo={movieInfo.result}/>
                  </div>

              </div>
          

    
          
      </div>
        // <div>
        //     <RenderMovie movieInfo={movieInfo.result}/>
        // </div>
    )
}
