import React,{useState} from 'react'
import { Container,Button, Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavBar from '../Navigation/NavBar'
import Header from '../Ui/Header'
import MailList from '../Mail/MailList';
import { MailActions } from '../../Store/Mail-Slice';

import { useSelector, useDispatch } from 'react-redux';

//icons
import {VscMenu} from 'react-icons/vsc'
import {HiOutlineInbox} from 'react-icons/hi'
import {AiOutlineStar} from 'react-icons/ai'
import {BiAlarmSnooze} from 'react-icons/bi'
import {AiOutlineSend} from 'react-icons/ai'
import {RiDraftLine} from 'react-icons/ri'
import {BsPencil} from 'react-icons/bs'
import ComposeMail from '../Mail/ComposeMail';
import Modal from '../Ui/Modal';
import SingleMail from '../Mail/SingleMail';

function WelcomePage() {
    const [sideBar, setSideBar] = useState(false);

    const isCompose = useSelector(state => state.Mail.composeMail);
    const dispatch = useDispatch();

    const onOpen = () => {
        setSideBar(true);
    }
    const onClose = () => {
        setSideBar(false);
    }

  return (
    <>
    <NavBar/>
    <Container>
    <VscMenu onClick={onOpen} style={{width:'35px', height:'65px', color:'#05386B', cursor:'pointer'}}/>
    <Header/>
    <Offcanvas show={sideBar} onHide={onClose} style={{backgroundColor:'#05386B'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Button onClick={()=>dispatch(MailActions.openCompose())}><BsPencil/> Compose</Button><br/>

    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home"  style={{color:'#EDF5E1'}}><HiOutlineInbox/>Inbox</Nav.Link>
      <Nav.Link eventKey="link-1"  style={{color:'#EDF5E1'}}><AiOutlineStar/>Starred</Nav.Link>
      <Nav.Link eventKey="link-2"  style={{color:'#EDF5E1'}}><BiAlarmSnooze/>Snoozed</Nav.Link>
      <Nav.Link eventKey="link-2"  style={{color:'#EDF5E1'}}><AiOutlineSend/>Sent</Nav.Link>
      <Nav.Link eventKey="link-2"  style={{color:'#EDF5E1'}}><RiDraftLine/>Drafts</Nav.Link>
    </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
    <div style={{padding:'4rem'}}>
    <MailList/>
    </div>
    {isCompose && <Modal>
     <ComposeMail/>
    </Modal>}
    
      <SingleMail/>
    
    </>
  )
}

export default WelcomePage