import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";


export const MovieList = (props) => {
  const { title, movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <>
      <div className="flex justify-center bg-primary">
        <h1 className=" text-white py-4 text-xl">{title}</h1>
      </div>

      <div className="divide-y overflow-scroll">
        <ul className="h-md" >
          <li className="divide-y">
            {results.map((movie) => (
              <div key={movie.id}>
                <article className="p-4 flex space-x-4 mb-1" >
                  <img
               
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="logo"
                    className="flex-none w-18 h-lg rounded-lg object-cover bg-gray-100"
                    width="50"
                    height="144"
                  />
                  <div
                    className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20"
              
                  >
                    <dl
                      className="flex flex-wrap text-sm text-gray-500 p-4 font-medium "
                   
                    >
                      <div className="absolute mr-36">
                        <div>
                        <dd>{<Link to={`/movie/${movie.id}`}>{movie.title}</Link>}</dd>
                        </div>
                       
                      </div>

                      <div className="absolute top-0 right-0 rounded-full px-2 py-0.5 items-center space-x-1 whitespace-pre w-10 h-lg">
                       
                      <Link to={`/movie/${movie.id}`}>
                         <button className="flex items-center justify-center rounded-md bg-info text-white p-2" type="submit">
                            ver
                          </button>
                      </Link>
                      </div>
                    </dl>
                  </div>
                </article>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};
