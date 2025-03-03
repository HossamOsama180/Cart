import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, decrement, deletee, increment, } from '../appSlice';

const Cart = () => {
    const products = useSelector((state) => state.counterReducer.Products);
    const dispatch = useDispatch();

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>
            <button onClick={() => dispatch(clear())} className='clear'>Clear</button>

            {products.length > 0 ? (
                <div className="cart-items">
                    {products.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <p className="cart-quantity">Quantity: {item.quantity}</p>

                            <div className='btns'>
                                <button onClick={() => dispatch(increment(item.id))} className='plus'>+</button>
                                <button onClick={() => dispatch(deletee(item.id))} className='remove'>Remove</button>
                                <button onClick={() => dispatch(decrement(item.id))} className='mines'>-</button>
                            </div>

                            <span className='totalprice'>Total Price: ${item.quantity * item.price}</span>

                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty!</p>
            )}


           
            
        </div>
    );
};

export default Cart;


