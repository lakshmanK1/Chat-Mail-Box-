import {configureStore} from '@reduxjs/toolkit'
import AuthReducers from './Auth-Slice';
import MailReducers from './Mail-Slice'

const ReduxStore = configureStore({
    reducer:{Authen:AuthReducers, Mail:MailReducers}
});

export default ReduxStore