import React, { useEffect, useState } from 'react'
import { Loading } from '../components/Loading';
import { MovieCatalog } from '../components/MovieCatalog';
import { Pagination } from '../components/Pagination';
import { API, URL_API } from '../config';

export const NewMovie = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);



    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
                );
                const movies = await response.json();
                setMovieList(movies);
        })();
    }, [page]);


    const onChangePage = page => {
        setPage(page);
    }



    return (
        <div className="">
            <div className="text-center mt-10 mb-12">
                <h1 className="text-4xl font-bold">
                    Ultimos lanzamientos
                </h1>
            </div>
            {
                movieList.results ? (
                    <>
                    <div className="grid grid-rows-4 grid-flow-col gap-1">
                        <MovieCatalog movies={movieList}/>
                    </div>
                    
                    <div className="p-6 items-center">
                        <Pagination
                             currentPage={movieList.page}
                             totalItems={movieList.total_results}
                             onChangePage={onChangePage}
                        />
                    </div>
                   </>


                ) : (

                    <div>
                      <Loading/>
                    </div>

                )
            }
             
        </div>
    )
}
