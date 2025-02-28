import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, decrement, deletee, increment, plus, mines, rest } from '../appSlice';

const Cart = () => {
    const products = useSelector((state) => state.counterReducer.Products);
    // const dd = useSelector((state) => state.counterReducer.value);
    const en = useSelector((state) => state.counterReducer.comment); // جلب التعليقات
    // const todoss = useSelector((state) => state.counterReducer.todo);
    // const todos = useSelector((state) => state.counterReducer.ARCHIVE);


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

                            
                            {/* ✅ عرض التعليق الخاص بالمنتج */}
                            <div className="comment-section">
                                <h4>Comment:</h4>
                                <ul>
                                    {en[item.id] && en[item.id].length > 0 ? (
                                        en[item.id].map((comment, index) => (
                                            <li key={index}>{comment} </li>
                                        ))
                                    ) : (
                                        <li>No comment available</li>
                                    )}
                                </ul>
                            </div>

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


