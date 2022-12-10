import { MailActions } from "./Mail-Slice";

const enteredEmail = localStorage.getItem('ChatEmail').replace('@','').replace('.','');

export const FetchMailsData = () => {
    return async(dispatch)=>{
        const FetchData = async () => {
            const response = await fetch(`https://chat-app-c6b5f-default-rtdb.firebaseio.com/MailData/${enteredEmail}.json`);

            if(!response.ok){
                throw new Error('Fetching data is failed');
            }

            const data = await response.json();
            return data;
        }
        try{
            let UserMailDetails = await FetchData();
            console.log(UserMailDetails);
            dispatch(MailActions.replaceMailList(UserMailDetails));
        }catch(err){
            console.log(err.message);
        }
    }
}

export const SendMailData = (MailData) => {
    return async() => {
        const postMailDetails = async() => {
            const response = await fetch(`https://chat-app-c6b5f-default-rtdb.firebaseio.com/MailData/${enteredEmail}.json`,{
                method:"PUT",
                body:JSON.stringify(MailData)
            });

            if(!response.ok){
                throw new Error('Posting data is failed');
            }
        }
        try{
            await postMailDetails();
        }catch(err){
            console.log(err.message);
        }
    }
}