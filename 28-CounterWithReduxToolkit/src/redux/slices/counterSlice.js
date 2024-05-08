import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    number: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.number += +action.payload

        },
        decrementByAmount: (state, action) => {
            state.number -= +action.payload

        },
        reset: (state) => {
            state.count = 0
            state.number = 0
        }
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer