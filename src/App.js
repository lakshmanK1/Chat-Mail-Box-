import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import AuthPage from "./components/Pages/AuthPage";
import WelcomePage from "./components/Pages/WelcomePage";
import {useSelector, useDispatch} from 'react-redux'
import {SendMailData, FetchMailsData} from './Store/Mail-Actions'
import MailList from "./components/Mail/MailList";
import SingleMail from "./components/Mail/SingleMail";
import InboxMail from "./components/Mail/InboxMail";

let isInitial = true;
function App() {
  const LoggedIn = useSelector(state => state.Authen.isLoggedIn);

  const mailData = useSelector(state => state.Mail);

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(FetchMailsData())
  },[dispatch]);


  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(SendMailData(mailData))
  },[mailData, dispatch]);

  return (
    <div style={{backgroundColor:'#5CDB95', width:'96rem', height:'68rem'}}>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
       {LoggedIn && <Route path="/welcomepage" element={<WelcomePage/>}/>}
       <Route exact path="/sendmailsbox" element={<MailList/>}/>
       <Route exact path="/sendmail/:id" element={<SingleMail/>}/>
       <Route exact path="/inboxmail" element={<InboxMail/>}/>
      </Routes>
    </div>
  );
}

export default App;
