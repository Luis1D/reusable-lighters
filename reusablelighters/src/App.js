import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Featured from './components/Featured';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Featured />
    </div>
  );
}

export default App;
