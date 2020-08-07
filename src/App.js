import React from 'react';
import './App.css'
import { Navbar } from './components/Navbar'
import { Movies } from './components/Movies';

function App() {

  return (
    <div >
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
