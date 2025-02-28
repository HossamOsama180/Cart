import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Products: [],
    value: 0,
    comment: {},
    name: [],
    password: [],
    email: []

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
        plus: (state, action) => {
            const item = state.Products.find((item) => item.id === action.payload);
            if (item) {
                if (!item.value) {
                    item.value = 1; // إذا لم يكن موجودًا، أنشئه بقيمة 1
                } else {
                    item.value += 1; // وإلا قم بزيادته
                }
            }
        },

        mines: (state, action) => {
            const item = state.Products.find((item) => item.id === action.payload);
            if (item && item.value > 0) {
                item.value -= 1;
            }
        },
        rest: (state, action) => {
            const item = state.Products.find((item) => item.id === action.payload);
            if (item && item.value > 0) {
                item.value = 0
            }
        },

        enterr: (state, action) => {
            const { id, comment } = action.payload;

            if (!state.comment[id]) {
                state.comment[id] = [];
            }

            state.comment[id].push(comment);
        },
        Loginn: (state, action) => {
            state.name.push(action.payload.name)
            state.email.push(action.payload.email)
            state.password.push(action.payload.password)
        }

    },
},
);

export const { addtocart, increment, decrement, deletee, clear, updateQuantity, plus, mines, rest, enterr,Loginn } = counterSlice.actions;

export default counterSlice.reducer;
