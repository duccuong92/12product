

import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "colorSlice",

    initialState: {
        current: "red"
    },

    reducers: {

        // payload chính là tham số mình truyền lên khi gọi method
        changeColor(state, action) {
            state.current = action.payload;
        }

    }

});

export const colorReducer = colorSlice.reducer;
export const changeColor = colorSlice.actions.changeColor;