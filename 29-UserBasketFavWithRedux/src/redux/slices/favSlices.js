import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [],
};

export const favSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            let existItemIndex = state.favorites.findIndex(
                (item) => item.id == action.payload.id
            );

            if (existItemIndex >= 0) {
                alert("Artıq movcuddur");
            } else {
                let buildFavItem = { ...action.payload };
                state.favorites?.push(buildFavItem);
                localStorage.setItem("favorites", JSON.stringify(state.favorites));
            }
        }
    }
})
export const { addToWishlist } = favSlice.actions
export default favSlice.reducer