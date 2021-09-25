import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
// shop component that contains all products
const Shop = () => {
    // useState method for handle products data loading
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data)) // set the data into setProducts state. 
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                    key={product.key}
                    product={product} // passing product object as props.
                // this is child component (Product)
                ></Product> )}
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <h5>Items Ordered: </h5>
            </div>
        </div>
    );
};

// shop component that contains all products
export default Shop;