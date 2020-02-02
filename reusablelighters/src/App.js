import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Featured from './components/Featured';
import Footer from './components/Footer';
import productList from './data/productList';
import './styles/app.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="product-list">
        {
          productList.map(product => {
            return <a href={ product.href } target="_blank">
            <div key={ product.id } className="product-container">
              <div>          
                  <img src={ product.src1 } />
                <img src={ product.src2 } alt="amazon ad" className="empty-img" />
              </div>
              <h2>{ product.title }</h2>
              <h3>${ product.price }</h3>
              <a href={ product.href } target="_blank" className="btn-link">
                <button>View Product</button>
              </a>
            </div>
            </a>
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
