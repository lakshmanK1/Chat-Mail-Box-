import React from "react";
import {Routes, Route} from 'react-router-dom'
import AuthPage from "./components/Pages/AuthPage";
import WelcomePage from "./components/Pages/WelcomePage";
import {useSelector} from 'react-redux'

 

function App() {
  const LoggedIn = useSelector(state => state.Authen.isLoggedIn);

  return (
    <div style={{backgroundColor:'#5CDB95', width:'96rem', height:'46.5rem'}}>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
       {LoggedIn && <Route path="/welcomepage" element={<WelcomePage/>}/>}
      </Routes>
    </div>
  );
}

export default App;
