import { configureStore } from '@reduxjs/toolkit'
import cardSlices from '../redux/slices/cardSlices'
import basketSlices from "./slices/basketSlices"
import favSlice from './slices/favSlices'

export const store = configureStore({
  reducer: {
    card: cardSlices,
    basket: basketSlices,
    wishlist: favSlice,
  },
})