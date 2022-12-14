import React,{useState} from 'react'
import { Container,Button,ListGroup  } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from './Modal';
import { MailActions } from '../../Store/Mail-Slice';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {VscMenu} from 'react-icons/vsc'
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import SnoodzeRoundedIcon from '@mui/icons-material/SnoozeRounded';
import SenRoundedIcon from '@mui/icons-material/SendRounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import {AiOutlineStar} from 'react-icons/ai'
import {BiAlarmSnooze} from 'react-icons/bi'
import {AiOutlineSend} from 'react-icons/ai'
import {RiDraftLine} from 'react-icons/ri'
import {BsPencil} from 'react-icons/bs'
import ComposeMail from '../Mail/ComposeMail';

import { Badge } from '@mui/material'
import { Mail } from '@mui/icons-material'



function SideBar() {

    const [sideBar, setSideBar] = useState(false);

    const isCompose = useSelector(state => state.Mail.composeMail);

    const unreadCount = useSelector(state => state.Mail.unreadMailCount);
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

        <ListGroup variant="flush" >
          <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white',fontSize:'22px'}}><Button onClick={()=>dispatch(MailActions.openCompose())} style={{width:'200px',padding:'10px', fontSize:'22px'}}><CreateRoundedIcon/> Compose</Button></ListGroup.Item>
            <Link to='/inboxmail' style={{textDecoration:'none'}}><ListGroup.Item  style={{backgroundColor:'#05386B',color:'white',fontSize:'18px'}}><Badge badgeContent={unreadCount} color="success">
            <Mail  style={{marginRight:'5px'}} /></Badge>
            Inbox</ListGroup.Item></Link>
            <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white',fontSize:'18px'}}><StarPurple500RoundedIcon style={{marginRight:'5px'}}/>Starred</ListGroup.Item>
            <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white',fontSize:'18px'}}><SnoodzeRoundedIcon style={{marginRight:'5px'}}/>Snoozed</ListGroup.Item>
            <Link to='/sendmailsbox' style={{textDecoration:'none'}}><ListGroup.Item  style={{backgroundColor:'#05386B',color:'white',fontSize:'18px'}}><SenRoundedIcon style={{marginRight:'5px'}}/>Sent</ListGroup.Item></Link>
            <ListGroup.Item  style={{backgroundColor:'#05386B',color:'white',fontSize:'18px'}}><DraftsIcon style={{marginRight:'5px'}}/>Drafts</ListGroup.Item>
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