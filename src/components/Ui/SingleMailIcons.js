import React from 'react'

//icons
import {BsArrowLeft} from 'react-icons/bs'
import {RiInboxArchiveFill, RiSpamFill} from 'react-icons/ri'
import {MdOutlineSnooze,MdMoveToInbox,MdLabelOutline} from 'react-icons/md'
import {AiFillFolderAdd,AiOutlineMore,AiFillPrinter} from 'react-icons/ai'
import {RxOpenInNewWindow} from 'react-icons/rx'


function SingleMailIcons() {
  return (
    <div>
        <div style={{float:'left'}}>
            <BsArrowLeft style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <RiInboxArchiveFill style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <RiSpamFill style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <MdOutlineSnooze style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <AiFillFolderAdd style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <MdMoveToInbox style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <MdLabelOutline style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <AiOutlineMore style={{width:'25px',height:'25px',cursor:'pointer'}}/>
        </div>

        <div style={{float:'right'}}>
            <AiFillPrinter style={{width:'25px',height:'25px',cursor:'pointer'}}/>
            <RxOpenInNewWindow style={{width:'25px',height:'25px',cursor:'pointer'}}/>
        </div>
    </div>
  )
}

export default SingleMailIcons