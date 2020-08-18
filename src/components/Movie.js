import React, { useState, Fragment } from 'react';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import { Modal } from 'reactstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon } from 'mdbreact';


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

        axios.get("http://localhost:3000/Movie-App-React/http://www.omdbapi.com/?i=" + imdbID + "&apikey=7cba9c29")
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
                });
                handleShow();
            })
            .catch(e => {
                console.log(e);
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

        <MDBCard className="card2 bg-transparent border-white" onClick={() => getMovie(movie.imdbID)} >
            <img
                hover
                overlay='white-slight'
                src={movie.Poster} alt={movie.Title}
            />

            <MDBCardBody >

                <h5 className='white-text'>
                    <MDBIcon icon='film' /> {movie.Title}
                </h5>

                <MDBCardTitle className="lead">
                    {movie.Year}
                </MDBCardTitle>

                <MDBCardTitle className="lead">
                    {movie.Type}
                </MDBCardTitle>

            </MDBCardBody>
            <Modal className="Modal" isOpen={show} style={modalStyles}>
                {modal}
            </Modal>
        </MDBCard>

    )

}


