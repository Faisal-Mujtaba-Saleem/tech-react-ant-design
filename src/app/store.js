import { configureStore } from '@reduxjs/toolkit'
import contactSlice from '../features/slices/contactSlice'

export const store = configureStore({
    reducer: {
        contact: contactSlice
    },
})