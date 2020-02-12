import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Carousel from './components/Carousel'
import './styles/app.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Carousel />
      <Products />
      <Footer />
    </div>
  );
}

export default App;