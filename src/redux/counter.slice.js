import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({ 
    // Duy nhất chỉ tạo 1
    name: "counterSlice",

    //initialState: giá trị khởi tạo, bất kỳ kiểu dữ liệu gì cũng được
    initialState: {
        value: 99
    },

    reducers: {

        // Mọi method trong reducers khi được gọi đều nhận tham số đầu tiên là state
        tangValue: (state) => {
            
            state.value += 1;

            //Warning: Không được dùng return
        }
    }
});

// export reducer để gắn vào store của redux
export const reducer = counterSlice.reducer;

export const tangValue = counterSlice.actions.tangValue;