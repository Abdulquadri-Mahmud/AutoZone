import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser : null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        signinStart : (state) => {
            state.loading = true
        },
        signingSuccess : (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signinFailure : (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateStart : (state) => {
            state.loading = true;
        },
        updateSuccess : (state, action) => {
            state.currentUser = action.payload;
            state.loading = false
            state.error = null;
        },
        updateFailure : (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteStart: (state, action) => {
            state.loading = true;
        },
        deleteSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        deleteFailure: (state, action) => {
            state.error =  action.payload;
            state.loading = false;
        },
        signOutUserStart: (state, action) => {
            state.loading = true;
        },
        signOutUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error =  action.payload;
            state.loading = false;
        },
    }
});

export const { 
    signinStart, signingSuccess, signinFailure,
    updateStart, updateSuccess, updateFailure,
    deleteStart, deleteSuccess, deleteFailure,
    signOutUserStart, signOutUserSuccess, signOutUserFailure,
} = userSlice.actions;

export default userSlice.reducer;