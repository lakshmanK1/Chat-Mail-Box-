import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import AuthPage from "./components/Pages/AuthPage";
import WelcomePage from "./components/Pages/WelcomePage";
import {useSelector, useDispatch} from 'react-redux'
import {SendMailData, FetchMailsData} from './Store/Mail-Actions'

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
      </Routes>
    </div>
  );
}

export default App;
