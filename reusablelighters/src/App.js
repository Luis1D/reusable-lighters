import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Featured from './components/Featured';
import Footer from './components/Footer';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
