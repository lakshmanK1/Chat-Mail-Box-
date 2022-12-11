import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

//icons
import {BsArrowLeft} from 'react-icons/bs'
import {RiInboxArchiveFill, RiSpamFill} from 'react-icons/ri'
import {MdOutlineSnooze,MdMoveToInbox,MdLabelOutline} from 'react-icons/md'
import {AiFillFolderAdd,AiOutlineMore,AiFillPrinter} from 'react-icons/ai'
import {RxOpenInNewWindow} from 'react-icons/rx'


function SingleMailIcons(props) {
    const navigate = useNavigate();
   
  return (
    <div>
        <div style={{float:'left'}}>
            <Link to='/sendmailsbox'><BsArrowLeft style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}} onClick={props.onHide}/></Link>
            <RiInboxArchiveFill style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <RiSpamFill style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <MdOutlineSnooze style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <AiFillFolderAdd style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <MdMoveToInbox style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <MdLabelOutline style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <AiOutlineMore style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
        </div>

        <div style={{float:'right'}}>
            <AiFillPrinter style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
            <RxOpenInNewWindow style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer',color:'grey'}}/>
        </div>
    </div>
  )
}

export default SingleMailIcons