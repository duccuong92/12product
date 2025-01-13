import { createSlice } from "@reduxjs/toolkit"

const fontSizeSlice = createSlice({
    name: "fontSizeSlice",
    initialState: {
        fz: 16,
    },

    reducers: {
        // Để đưa ra những action cho phép người dùng cập nhật lại state lưu trên redux


        // 
        // @param {*} state: chúng tạo ở trên initialState
        // @param {*} action: dữ liệu ngguowif udfng gguiwr lên
        //

        tangFontSize(state, action) {
            state.fz = state.fz + action.payload
        },

        giamFontSize(state, action) {
            state.fz -= action.payload
        },
    }
})

export const fontSizeReducer = fontSizeSlice.reducer;
export const tangFontSize = fontSizeSlice.actions.tangFontSize;
export const giamFontSize = fontSizeSlice.actions.giamFontSize;