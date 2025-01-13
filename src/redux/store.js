import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./counter.slice";
import { colorReducer } from "./color.slice";
import { useSelector, useDispatch } from "react-redux";


// import { colorReducer } from "./color.slice"
import { fontSizeReducer } from "./font-size.slice"


// Nơi chúnng ta kết nối tất cả các State ở slice lại với nhau.
export const store = configureStore ({
    reducer: {
        counterReducer: reducer,
        colorReducer,
        fontSizeReducer
    }
})

