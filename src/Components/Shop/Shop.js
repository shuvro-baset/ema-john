import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
// shop component that contains all products
const Shop = () => {
    // useState method for handle products data loading
    const [products, setProducts] = useState([]);
    // another useState method for handle product cart. 
    /*note: we cannot use this in child component to pass data into parent. We should use it to the parent then we can pass it to the child component. 
        here, Product component and cart component both are child component. So we can not pass the product into the child component. thats why we added useState method in the Shop component(Parent component)
    */
    const [cart, setCart] = useState([]);
    // another useState method for products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data);   
            }) // set the data into setProducts state. 
    }, [])


    // applying useEffect for setting local storage data. 
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart(); // get local storage data.
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key); // matching product key which is stored in local storage
                if (addedProduct) {
                    const quantity = savedCart[key]; // getting product quantity
                    addedProduct.quantity = quantity; // adding quantity property into addedProduct object.
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]) // adding dependency when product changes. If we put it empty array then it will called only one time.

    // eventHandle function for onclick product.
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage.
        addToDb(product.key)
    }

    // handling search option.
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
        <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
        <div className="shop-container">
            <div className="product-container">
                {
                    // this is child component (Product)
                        displayProducts.map(product => <Product
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
        </>
    );
};

// shop component that contains all products
export default Shop;