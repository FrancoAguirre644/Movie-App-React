import React, { useState, Fragment } from 'react';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import { Modal } from 'reactstrap';


export const Movie = ({ movie }) => {

    const [movieSelected, setMovieSelected] = useState({
        Released: '',
        Actors: '',
        Director: '',
        Plot: '',
        Genre: '',
        Runtime: '',
        number: 1,
    });

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const modalStyles = {
        position: "absolute",
        left: '20%',
        transform: 'translate(-50%, 20%)'
    }

    const getMovie = (imdbID) => {

        axios.get("http://www.omdbapi.com/?i=" + imdbID + "&apikey=7cba9c29")
            .then(response => {
                setMovieSelected({
                    ...movieSelected,
                    Released: response.data.Released,
                    Actors: response.data.Actors,
                    Director: response.data.Director,
                    Plot: response.data.Plot,
                    Genre: response.data.Genre,
                    Runtime: response.data.Runtime,
                    imdbRating: response.data.imdbRating
                })
                handleShow()
            })
            .catch(e => {
                console.log(e)
            })

    }


    const modal = (
        <Fragment>

            <div className="movie_card" >
                <div className="info_section">
                    <button onClick={handleClose}>X</button>

                    <div className="movie_header">
                        <img className="locandina" src={movie.Poster} alt={movie.Title} />
                        <h1>{movie.Title}</h1>
                        <h4>{movie.Year}, {movieSelected.Director}</h4>
                    </div>

                    <div className="movie_desc">

                        <ReactStars
                            count={10}
                            size={24}
                            edit={false}
                            isHalf={true}
                            value={movieSelected.imdbRating}
                            activeColor="#ffd700"
                        />

                        <span className="minutes">{movieSelected.Runtime}</span>
                        <p className="type">{movie.Type}</p>
                        <p className="text">{movieSelected.Plot}</p>
                    </div>
                </div>
                <div className="blur_back bright_back" style={{ backgroundImage: `url(${movie.Poster})` }}></div>
            </div>



        </Fragment>
    )

    return (

        <div className="card2" onClick={() => getMovie(movie.imdbID)}>

            <img className="card-img-top" src={movie.Poster} alt={movie.Title} />

            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                <p className="card-text">{movie.Type}</p>
            </div>

            <Modal className="Modal" isOpen={show} style={modalStyles}>
                {modal}
            </Modal>

        </div>
    )

}


