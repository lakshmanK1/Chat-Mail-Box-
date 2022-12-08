import {configureStore} from '@reduxjs/toolkit'
import AuthReducers from './Auth-Slice';

const ReduxStore = configureStore({
    reducer:{Authen:AuthReducers}
});

export default ReduxStore