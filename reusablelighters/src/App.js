import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import './styles/app.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Navigation />
      {/* <Carousel /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;