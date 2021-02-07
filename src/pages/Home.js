import React from 'react'
import { MovieList } from '../components/MovieList';
import { SliderMovies } from '../components/SliderMovies'
import { URL_API, API} from '../config';
import useFetch from '../hooks/useFetch';

export const Home = () => {


    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);

    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);
      const topRatedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`);

    return (
        <>
        <div>
            <SliderMovies movies={newMovies}/>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-2 gap-4 justify-items-center ">
            <div className="justify-center w-9/12 border border-black rounded shadow-xl">
            {/* <div className="box-border md:box-content"> */}
             <MovieList title="Peliculas Populares" movies={popularMovies}/>

            {/* </div> */}
            </div>
            <div className="justify-center w-9/12 border border-black rounded shadow-xl" >
            <MovieList title="Top Mejores Peliculas Puntuadas" movies={topRatedMovies}/>
            </div>
        </div>
      
      </div>
      </>
    )
}



