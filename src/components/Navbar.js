import React from 'react';
import logo from '../logo.svg';

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <a className="navbar-brand" href="https://es.reactjs.org/" > <div className="container"><img src={logo} width="30" height="30" alt="React" className=" d-inline-block align-top" />
            Movie Finder </div></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        </div>
    </nav >
)