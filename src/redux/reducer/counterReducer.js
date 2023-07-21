import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter', //it is like a state variable name

    initialState: { //initial state like we passed inside useState() as argument
        value: 0
    },

    reducers: {
        increment: (state,action) => {
            state.value += 1
        },
        decrement: (state,action) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer    //importing in Store.js as counterReducer