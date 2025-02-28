
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './appSlice'; // تأكد من مسار appSlice الصحيح

export const store = configureStore({
  reducer: {
    counterReducer, // تأكد من اسم الـ reducer كما هو في appSlice.js
  },
});

export default store;
