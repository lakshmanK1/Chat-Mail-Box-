import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

const TotalMails = [{
    id:1,
    To:'ganesh1@gmail.com',
    Subject:'I want Leave',
    Text:'Hi, iam unable to come office today due to fever.',
    Timestamp:String(new Date())
}];

const MailSlice = createSlice({
    name:'mail',
    initialState:{
        TotalMails,
        composeMail:false
    },
    reducers : {
        replaceMailList : (state, action) => {
            state.TotalMails = action.payload.TotalMails;
            state.composeMail = action.payload.composeMail
        },

        addMail : (state, action) => {
            const newData = {...action.payload, id:uuidv4()};
            state.TotalMails = [newData, ...state.TotalMails];
        },

        openCompose : (state) => {
            state.composeMail = true;
        },

        closeCompose : (state) => {
            state.composeMail = false;
        }
    }
});
export const MailActions = MailSlice.actions;
export default MailSlice.reducer