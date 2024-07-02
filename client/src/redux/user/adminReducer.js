import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAdmin: null,
    error: null,
    loading: false
}

const adminSlice = createSlice({
    name : 'admin',
    initialState,
    reducers: {
        adminSignInStart: (state) => {
            state.loading = true;
        },
        adminSignInSuccess: (state, action) => {
            state.currentAdmin = action.payload;
            state.loading = false;
            state.error = null
        },
        adminSignInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { adminSignInStart,
    adminSignInSuccess,
    adminSignInFailure
 } = adminSlice.actions;

export default adminSlice.reducer;