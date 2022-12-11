import React,{useState} from 'react'
import { Container,Button,ListGroup  } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from './Modal';
import { MailActions } from '../../Store/Mail-Slice';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {VscMenu} from 'react-icons/vsc'
import {HiOutlineInbox} from 'react-icons/hi'
import {AiOutlineStar} from 'react-icons/ai'
import {BiAlarmSnooze} from 'react-icons/bi'
import {AiOutlineSend} from 'react-icons/ai'
import {RiDraftLine} from 'react-icons/ri'
import {BsPencil} from 'react-icons/bs'
import ComposeMail from '../Mail/ComposeMail';



function SideBar() {

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
    <div>
    <Container>
    <VscMenu onClick={onOpen} style={{width:'35px', height:'65px', color:'#05386B', cursor:'pointer'}}/>
    <Offcanvas show={sideBar} onHide={onClose} style={{backgroundColor:'#05386B'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Button onClick={()=>dispatch(MailActions.openCompose())}><BsPencil/> Compose</Button><br/>

        <ListGroup variant="flush" >
            <Link to='/inboxmail'><ListGroup.Item  style={{backgroundColor:'#05386B',color:'white'}}><HiOutlineInbox/>Inbox</ListGroup.Item></Link>
            <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white'}}><AiOutlineStar/>Starred</ListGroup.Item>
            <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white'}}><BiAlarmSnooze/>Snoozed</ListGroup.Item>
            <Link to='/sendmailsbox'><ListGroup.Item  style={{backgroundColor:'#05386B',color:'white'}}><AiOutlineSend/>Sent</ListGroup.Item></Link>
            <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white'}}><RiDraftLine/>Drafts</ListGroup.Item>
        </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>

    {isCompose && <Modal>
     <ComposeMail/>
    </Modal>}
    </div>
  )
}

export default SideBar