import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import productList from './data/productList';
import Carousel from './components/Carousel'
import './styles/app.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Carousel />
      <h2 className="section-header">Product List</h2>
      <div className="product-list">
        {
          productList.map(product => {
            return <div className="product-container" key={ product.id }>
              <div>          
                  <img src={ product.src1 } alt="product" />
                <img src={ product.src2 } alt="amazon ad" className="empty-img" />
              </div>
              <h2>{ product.title }</h2>
              <h3>${ product.price }</h3>
              <a href={ product.href } target="_blank" rel="noopener noreferrer" className="btn-link">
                <button>View Product</button>
              </a>
            </div>
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
