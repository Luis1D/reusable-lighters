import React, { useState } from 'react';
import productList from '../data/productList';

const Products = () => {
    const [loaded, setLoaded] = useState(false);

    const handleOnLoad = () => {
        setLoaded(true);
    }

    const handleOnError = () => {
        console.log("Network Connection Error. Could not retrieve images")
    }

    return (
        <div>
            <h2 className="section-header">Product List</h2>
            <div className="product-list">
                {
                productList.map(product => {
                    return <div className="product-container" key={ product.id }>
                    <div>
                        {
                            loaded ?  null : <div className="product-img-loading"></div>
                        }          
                        <img 
                            src={ product.src1 } 
                            alt="product"
                            onLoad={ handleOnLoad }
                            onError={ handleOnError } 
                        />
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
        </div>
    )
}

export default Products;