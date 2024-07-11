import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCart : [],
    loading: false,
    error: null
}

const cartSlice =  createSlice({
    name: 'userCart',
    initialState,
    reducers: {
        cartStart: (state) => {
            state.loading = true;
        },
        cartSuccess : (state, action) => {
            state.userCart = [action.payload];
            state.loading = false;
            state.error = null;
        },
        cartFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;

        }
    }
});

export const {
    cartStart,
    cartSuccess,
    cartFailure
} = cartSlice.actions;

export default cartSlice.reducer;