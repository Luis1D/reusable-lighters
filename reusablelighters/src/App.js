import React, {useState, useEffect} from 'react';
// DATA
import productList from './data/productList';
// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Navigation from './components/Navigation';
// CONTEXT
import productContext from './contexts/productContext';
// STYLES
import './styles/app.scss';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(productList);
  }, []);

  const handleCompactFilter = () => {
    setProducts(productList.filter(item => {
      const filter = item.keywords.map(keyword => {
        return keyword;
      })
      console.log(filter)
      return filter.includes("compact");
    }))
  }
  const handleOutdoorsFilter = () => {
    setProducts(productList.filter(item => {
      const filter = item.keywords.map(keyword => {
        return keyword;
      })
      console.log(filter)
      return filter.includes("outdoors");
    }))
  }
  const handleExtendFilter = () => {
    setProducts(productList.filter(item => {
      const filter = item.keywords.map(keyword => {
        return keyword;
      })
      console.log(filter)
      return filter.includes("extended");
    }))
  }

  return (
    <div className="App">
      <productContext.Provider value={ products }>
        <Header />
        <div className="Navigation">
            <nav>
                <span>Filters :</span>
                <ul>
                    <li onClick={ handleCompactFilter }>Compact</li>
                    <li onClick={ handleOutdoorsFilter }>Outdoors</li>
                    <li onClick={ handleExtendFilter }>Extended</li> 
                </ul>
            </nav>
        </div>
        <Products />
        <Footer />
       </productContext.Provider> 
    </div>
  );
}

export default App;