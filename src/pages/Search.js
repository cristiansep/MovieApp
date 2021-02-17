import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { API, URL_API } from '../config';
import { Loading } from '../components/Loading';
import { MovieCatalog } from '../components/MovieCatalog';
import { Footer } from '../components/Footer';

function Search(props) {

    const { location, history } = props;
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async () => {
          const searchValue = queryString.parseUrl(location.search);
          const { s } = searchValue.query;
          const response = await fetch(
            `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
          );
          const movies = await response.json();
    
          setSearchValue(s);
          setMovieList(movies);
          console.log(movies)
        })();
      }, [location.search]);
    
      const onChangeSearch = e => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);
      };



    return (
      <>
        <div className="text-center mt-10 mb-12">
          <h1 className="text-5xl font-bold">Busca tu película</h1>
          <input
                type="text"
                value={"" || searchValue} 
                onChange={onChangeSearch}
                className="mt-10 w-10/12 bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
          
        </div>
        {movieList.results && (
          <>
            <div className="grid grid-rows-4 grid-flow-col gap-1">
              <MovieCatalog movies={movieList} />
            </div>
          </>
        )}
        <div className="relative">
          <div className="absolute inset-x-0 top-80 ">
               <Footer />
          </div>
     
        </div>
      </>
    );
}

export default withRouter(Search);



 
