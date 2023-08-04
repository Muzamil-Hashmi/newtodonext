// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import todoslice from '../features/todoslice'

const store = configureStore({
    reducer: {
        todo:todoslice,
    }
});

// console.log(store)
export default store;

