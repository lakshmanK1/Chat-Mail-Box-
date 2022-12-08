import React from 'react'
import { Container } from 'react-bootstrap'
import Signup from '../Authentication/Signup'
import NavBar from '../Navigation/NavBar'
import Header from '../Ui/Header'

function AuthPage() {
  return (
    <>
    <NavBar/>
    <Container>
        <Header/>
        <center>
        <Signup/> 
        </center>
    </Container>
    </>
  )
}

export default AuthPage