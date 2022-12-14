import { MailActions } from "./Mail-Slice";



export const FetchMailsData = () => {
    const enteredEmail = localStorage.getItem('ChatEmail').replace('@','').replace('.','');
    return async(dispatch)=>{
        const FetchData = async () => {
            const response = await fetch(`https://chat-mail-box-default-rtdb.firebaseio.com/MailStore/${enteredEmail}.json`);

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
    const enteredEmail = localStorage.getItem('ChatEmail').replace('@','').replace('.','');
    return async() => {
        const postMailDetails = async() => {
            const response = await fetch(`https://chat-mail-box-default-rtdb.firebaseio.com/MailStore/${enteredEmail}.json`,{
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


export const DeleteMailData = (mail) => {
    const enteredEmail = localStorage.getItem('ChatEmail').replace('@','').replace('.','');
        return async(dispatch) => {
            const deleteMail = async () => {
                const response = await fetch(`https://chat-mail-box-default-rtdb.firebaseio.com/MailStore/${enteredEmail}/${mail.id}.json`,{
                    method:'DELETE',
                });
    
                const data = await response.json();
    
                if(response.ok){
                    dispatch(MailActions.deleteMail(mail.id));
                }else {
                    throw data.error;
                }
            }
            try{
                await deleteMail();
            }catch(err){
                console.log(err.message)
            }
        }
    }