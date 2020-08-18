import React, { Fragment } from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar } from './components/Navbar'
import { Movies } from './components/Movies';

function App() {

  return (
    <Fragment >
      <Navbar />
      <Movies />
    </Fragment>
  );
}

export default App;
