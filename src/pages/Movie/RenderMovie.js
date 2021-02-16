import React from 'react';
import { MovieInfo } from './MovieInfo';
import { PosterMovie } from './PosterMovie';

export const RenderMovie = (props) => {

    const {
        movieInfo: { backdrop_path, poster_path }
      } = props;
      const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div 
        className="h-calc bg-no-repeat bg-center bg-cover"
        style={{backgroundImage: `url('${backdropPath}')`}}
        >
            <div className="absolute top-0 left-0 h-h100 w-full bg-black opacity-70 " />

                <div className="grid grid-cols-2 h-h100 items-center">
                    <div className="h-mvp" style={{offset: 3}}>
                        <div className="bg-center bg-contain bg-no-repeat h-mvp100">
                            <PosterMovie image={poster_path}/>
                            zxzxzxz
                        </div>
                   
                    </div>
                    {/* <div>
                        asdasdasdasasasasassa
                        <MovieInfo movieInfo={props.movieInfo}/>
                    </div> */}

                </div>

      
            
        </div>
    )
}
