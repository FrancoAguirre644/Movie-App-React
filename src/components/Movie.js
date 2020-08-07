import React from 'react';

export const Movie = ({ movie }) => {

    return (



        <div className="card2 ">

            <img className="card-img-top" src={movie.Poster} />

            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                <p className="card-text">{movie.Type}</p>
            </div>



        </div>
    )

}


