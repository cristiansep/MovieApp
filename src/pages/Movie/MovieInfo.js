import React from 'react';
import moment from "moment";

export const MovieInfo = (props) => {
    const {
        movieInfo: { id, title, release_date, overview, genres }
      } = props;

    return (
        <>
        <div className="flex items-center justify-between">
         <h1 className="text-white m-0 text-6xl">
            {title}
            <span className="text-xl ml-2 opacity-60">{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
         </h1>
        </div>
        <div className="mt-20 ">
        <h3 className="font-bold text-2xl mb-3">General</h3>
          <p className="text-justify w-4/6 mb-5">{overview}</p>
  
          <h3 className="font-bold text-2xl mb-3">Generos</h3>
          <ul className="list-disc ml-10">
            {genres.map(gender => (
              <li key={gender.id}>{gender.name}</li>
            ))}
          </ul>
        </div>
        </>
    )
}
