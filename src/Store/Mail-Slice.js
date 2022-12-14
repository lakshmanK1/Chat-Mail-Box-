import {createSlice} from '@reduxjs/toolkit'

let date = new Date();

    let convertedTime = date.toLocaleString ('en-US', {
        day:    '2-digit',
        month:  '2-digit',
        year:   'numeric',
        hour:   'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    }
) ;

const TotalMails = [{
    id:1,
    To:'ganesh1@gmail.com',
    Subject:'I want Leave',
    Text:'Hi, iam unable to come office today due to fever.',
    Timestamp:String(convertedTime),
    ReadMail:false
}];

const MailSlice = createSlice({
    name:'mail',
    initialState:{
        TotalMails,
        composeMail:false,
        selectedMailDetails:null,
    },
    reducers : {
        replaceMailList : (state, action) => {
            state.TotalMails = action.payload.TotalMails;
            state.composeMail = action.payload.composeMail;
            state.selectedMailDetails = action.payload.selectedMailDetails;
        },

        addMail : (state, action) => {
            const newData = {...action.payload, ReadMail:false};
            state.TotalMails = [newData, ...state.TotalMails];
        },

        deleteMail : (state, action) => {
            state.TotalMails = state.TotalMails.filter((mail) => mail.id !== action.payload);
        },

        openCompose : (state) => {
            state.composeMail = true;
        },

        closeCompose : (state) => {
            state.composeMail = false;
        },

        mailDetails : (state, action) => {
            state.selectedMailDetails = action.payload;
        },

        showInboxDot : (state,action) => {
            const index = state.TotalMails.findIndex((item) => item.id === action.payload.id);

            state.TotalMails[index].ReadMail = action.payload.ReadMail; 
        },

        hideInboxDot : (state, action) => {
            const indexNum = state.TotalMails.findIndex((item) => item.id === action.payload.id);

            state.TotalMails[indexNum].ReadMail = action.payload.ReadMail; 
        }
    }
});
export const MailActions = MailSlice.actions;
export default MailSlice.reducer