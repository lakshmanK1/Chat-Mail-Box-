import {createSlice} from '@reduxjs/toolkit'

const tokenData = localStorage.getItem('ChatAppToken');
const initialAuthState = {token:tokenData, isLoggedIn:!!tokenData }

const AuthSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        LogIn : (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            localStorage.setItem('ChatAppToken', state.token);
        },

        LogOut : (state, action) => {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('ChatAppToken');
        }
    }
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;