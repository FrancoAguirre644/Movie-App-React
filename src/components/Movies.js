import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from './Movie';
import { MDBCardGroup, MDBRow } from 'mdbreact';
import { Spinner } from 'reactstrap';


export const Movies = () => {

    const [search, setsearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'Movie Finder';

    }, []);

    const getMovies = async (e) => {
        e.preventDefault()

        if (search === "") {
            setError("Please insert a name movie.");
            setMovies([]);
            return movies;
        }

        setLoading(true);

        await axios.get("https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=" + search + "&apikey=7cba9c29")
            .then(response => {
                setMovies(response.data.Search);
                setError(response.data.Error);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (

        <div className="container-fluid">

            <div className="row justify-content-center">

                <div className="form_group field m-3">
                    <form onSubmit={e => getMovies(e)}>
                        <input type="input" className="form_field" placeholder="Search" onChange={e => (setsearch(e.target.value))} />
                        <label className="form_label">Search</label>
                    </form>

                    {(error === '') ? '' : <div className="mt-4 text-center">{error}</div>}
                </div>

            </div>

            <MDBCardGroup>

                <MDBRow className="row justify-content-center">

                    {loading ? <div className="mx-auto"><Spinner animation="border" variant="info" /></div> :

                        movies && (movies.map(movie => {

                            return <Movie key={movie.imdbID} movie={movie} />

                        }))

                    }

                </MDBRow >

            </MDBCardGroup >

        </div >
    )
}


