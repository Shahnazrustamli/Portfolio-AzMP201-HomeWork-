import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baskets: JSON.parse(localStorage.getItem("baskets")) || [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const itemIndex = state.baskets.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.baskets[itemIndex].basketQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, basketQuantity: 1 };
                state.baskets.push(tempProduct);
            }

            localStorage.setItem("baskets", JSON.stringify(state.baskets));
        }, removeFromBasket: (state, action) => {
            state.baskets = state.baskets.filter((item) => item.id !== action.payload);
        },
    }
})

export const { addToCard,removeFromBasket } = basketSlice.actions
export default basketSlice.reducer