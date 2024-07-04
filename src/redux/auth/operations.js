import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GiToken } from 'react-icons/gi';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};



export const register = createAsyncThunk("auth/register", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userInfo);
        setAuthHeader(response.auth.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const login = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userInfo);
        setAuthHeader(response.auth.token);
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
    try {
        const response = await axios.post('/users/logout');
    clearAuthHeader();
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    

    if (token === null) {
      return thunkAPI.rejectWithValue('Error fetching user data, please try again');
    }

    try {
        setAuthHeader(token);
        const response = await axios.get('/users/current');
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
    
});