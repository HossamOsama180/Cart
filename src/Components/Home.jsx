import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../appSlice';


const Home = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    // fetch data
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <>
            {/* <div className='banner'>
            </div> */}
            <div className="product-grid">
                {products.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} className="product-image" />
                        <h3>{item.title.substring(5)}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => dispatch(addtocart({
                            id: item.id,
                            img: item.image,
                            price: item.price,
                            cate: item.category,
                            title: item.title,
                            desc: item.description,
                            quantity: 1
                        }))}>add to cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;


