import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      
      <Footer />
    </Router>
    </div>

  
  );
}

export default App;
