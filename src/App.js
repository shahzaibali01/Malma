import React from 'react';
import './App.css';
import Baseline from './Components/Baseline/Baseline';
import Body from './Components/Body/Body';
import Fees from './Components/Fees/Fees';
import Footer from './Components/Footer1/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Puzzle from './Components/Puzzle/Puzzle';
import Testimonail from './Components/Testimonails/Testimonail';
import Work from './Components/Work/Work'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Work />
      <Baseline />
      <Puzzle />
      <Fees /> 
      <Testimonail />
      <Footer />
    </div>
  );
}

export default App;
