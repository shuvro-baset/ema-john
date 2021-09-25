import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
// shop component that contains all products
const Shop = () => {
    // useState method for handle products data loading
    const [products, setProducts] = useState([]);
    // another useState method for handle product cart. 
    /*note: we cannot use this in child component to pass data into parent. We should use it to the parent then we can pass it to the child component. 
        here, Product component and cart component both are child component. So we can not pass the product into the child component. thats why we added useState method in the Shop component(Parent component)
    */
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data)) // set the data into setProducts state. 
    }, [])

    // eventHandle function for onclick product.
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    // this is child component (Product)
                        products.map(product => <Product
                        key={product.key} // we should pass a key value for ignoring react warning. which contains a unique key value.
                        product={product} // passing product object as props.
                        handleAddToCart = {handleAddToCart}
                    ></Product> )
                }
            </div>
            <div className="cart-container">
            {/* cart component. */}
                <Cart cart={cart}></Cart> 
            </div>
        </div>
    );
};

// shop component that contains all products
export default Shop;