import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AuthActions } from '../../Store/Auth-Slice'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {SiGmail} from 'react-icons/si'

function NavBar() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.Authen.isLoggedIn);
    const navigate = useNavigate();

    const LogoutHandler = () => {
        dispatch(AuthActions.LogOut());
        navigate('/');
    }

  return (
    <div>
    <Navbar expand="lg" style={{backgroundColor:'#05386B'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'#EDF5E1',fontSize:'35px'}}><SiGmail style={{background: '-webkit-linear-gradient(red,green)', marginRight:'5px'}}/>Chat App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:'#EDF5E1'}} className='ms-4'>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'#EDF5E1'}}  className='ms-4'>Contact us</Nav.Link>
            <Nav.Link href="#link" style={{color:'#EDF5E1'}}  className='ms-4'>Queries</Nav.Link>
            {isLoggedIn && <Nav.Link href="#link" style={{color:'white'}}  className='ms-4' onClick={LogoutHandler}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar