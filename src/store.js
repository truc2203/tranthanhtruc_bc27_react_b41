import { configureStore } from "@reduxjs/toolkit";
import seatReducer from './Reducer/seatReducer'
const store = configureStore({
    reducer:{
        seat : seatReducer,
    }
})