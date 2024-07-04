import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false
    },
    extraReducers: builder => {
        builder
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, state => {
            state.isLoggedIn = false;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, state => {
            state.isLoggedIn = false;
        })
        .addCase(logout.fulfilled, state => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false; // Додати скидання стану тут
        });
    }
});

export const authReducer = authSlice.reducer;