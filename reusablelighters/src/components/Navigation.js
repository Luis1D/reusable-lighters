import React, {useContext} from 'react';
import productContext from '../contexts/productContext';

const Navigation = () => {
    const products = useContext(productContext);
    const handleFilter = () => {

    }

    return (
        <div className="Navigation">
            <nav>
                <span>Filters :</span>
                <ul>
                    <li onClick={ handleFilter }>Compact</li>
                    <li onClick={ handleFilter }>Outdoors</li>
                    <li onClick={ handleFilter }>Extended</li> 
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;