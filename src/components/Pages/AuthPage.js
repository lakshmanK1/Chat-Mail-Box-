import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import LogIn from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import NavBar from '../Navigation/NavBar'
import Header from '../Ui/Header'

function AuthPage() {
    const [toggleForm, setToggleForm] = useState(false);

    const toggle = () => {
        setToggleForm(true);
    }
 
    const resetToggle = () => {
        setToggleForm(false);
    }

  return (
    <>
    <NavBar/>
    <Container>
        <Header/>
        <center>
        {!toggleForm && <Signup/>}
        {toggleForm && <LogIn />}
        {!toggleForm && <p style={{color:'white', border:'2px solid white', width:'280px', padding:'12px', marginTop:'10px', fontWeight:'bold'}}>alredy have an account,
        <span style={{cursor:'pointer'}} onClick={toggle}> LogIn</span></p>}

        {toggleForm && <p style={{color:'white', border:'2px solid white', width:'280px', padding:'12px', marginTop:'10px', fontWeight:'bold'}}>Do not have Account,
        <span style={{cursor:'pointer'}} onClick={resetToggle}> Create now</span></p>}
        </center>
    </Container>
    </>
  )
}

export default AuthPage