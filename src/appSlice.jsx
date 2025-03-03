import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Products: [],
    value: 0,



};

const counterSlice = createSlice({
    name: 'E-commerce',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const item = state.Products.find((item) => item.id === action.payload.id);

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.Products.push(action.payload);
            }
        },
        increment: (state, action) => {
            const item = state.Products.find((item) => item.id === action.payload)
            if (item) {
                item.quantity++
            }
        },
        decrement: (state, action) => {
            const item = state.Products.find((item) => item.id === action.payload)
            if (item.quantity > 1) {
                item.quantity--
            }
        },
        deletee: (state, action) => {
            state.Products = state.Products.filter((item) => item.id !== action.payload)
        },
        clear: (state, action) => {
            state.Products = [];
        },
        

    },
},
);

export const { addtocart, increment, decrement, deletee, clear, updateQuantity, enterr,Loginn } = counterSlice.actions;

export default counterSlice.reducer;
