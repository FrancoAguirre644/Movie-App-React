import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Movie } from './Movie'

export const Movies = () => {

    const [search, setsearch] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovies = (e) => {
        e.preventDefault()

        axios.get("http://www.omdbapi.com/?s=" + search + "&apikey=7cba9c29")
            .then(response => {
                console.log(response.data.Search)
                setMovies(response.data.Search)
            })
            .catch(e => {
                console.log(e)
            })

    }

    return (

        <div className="container-fluid">

            <div className="row justify-content-center">

                <div className="form_group field m-4">
                    <form onSubmit={e => getMovies(e)}>
                        <input type="input" className="form_field" placeholder="Search" onChange={e => (setsearch(e.target.value))} required />
                        <label for="name" className="form_label">Search</label>
                    </form>
                </div>

            </div>

            <div className="row">

                {
                    movies.map(movie => {

                        return <Movie key={movie.imdbID} movie={movie} />

                    })
                }

            </div >

        </div >
    )
}


