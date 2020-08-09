import React, { useState } from 'react';
import axios from 'axios'
import { Movie } from './Movie'

export const Movies = () => {

    const [search, setsearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const getMovies = (e) => {
        e.preventDefault()

        axios.get("http://www.omdbapi.com/?s=" + search + "&apikey=7cba9c29")
            .then(response => {
                console.log(response.data)
                setMovies(response.data.Search)
                setError(response.data.Error)
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
                        <label className="form_label">Search</label>
                    </form>

                    {(error === '') ? '' : <div className="mt-3 text-center">{error}</div>}
                </div>

            </div>

            <div className="row">

                {
                    (movies) ?

                        movies.map(movie => {

                            return <Movie key={movie.imdbID} movie={movie} />

                        })
                        : ''

                }

            </div >

        </div >
    )
}


