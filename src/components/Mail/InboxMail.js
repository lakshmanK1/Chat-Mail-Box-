import React from 'react'
import {Card, Table, Badge} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../Navigation/NavBar'
import SideBar from '../Ui/SideBar'

//icons
import {CgSelectR} from 'react-icons/cg'
import {HiOutlineRefresh,HiUserCircle} from 'react-icons/hi'
import {FiMoreVertical, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {FaCircle} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { MailActions } from '../../Store/Mail-Slice'

function InboxMail(props) {
  const {TotalMails} = useSelector(state => state.Mail);

  const showDot = useSelector(state => state.Mail.displayInboxDot);

  const dispatch  = useDispatch();

  
  return (
    <div>
      <NavBar/>
      <SideBar/>
    <Card style={{height:'600px', width:'1200px',marginLeft:'150px',overflowY:'auto'}}>
      <Card.Header>
        <div style={{float:'left'}}>
            <CgSelectR style={{marginLeft:'15px',cursor:'pointer'}}/><HiOutlineRefresh style={{marginLeft:'15px',cursor:'pointer'}}/><FiMoreVertical style={{marginLeft:'15px',cursor:'pointer'}}/>
        </div>
        <div style={{float:'right'}}>
            <p>1-50 of 20,000 <FiChevronLeft style={{cursor:'pointer'}}/><FiChevronRight style={{cursor:'pointer'}}/></p>
        </div>
      </Card.Header>
      <Card.Body>
        {TotalMails.map((data)=>(
        <Link to={`/inboxmail/${data.id}`} style={{textDecoration:'none',color:'black'}}><Table onClick={()=>{ dispatch(MailActions.mailDetails({
            id:data.id,
            To:data.To,
            Subject:data.Subject,
            Text:data.Text,
            Timestamp:data.Timestamp,
            ReadMail:data.ReadMail
          }));
          dispatch(MailActions.hideInboxDot({id:data.id, ReadMail:false}));
          }}>
            {data.ReadMail && <FaCircle style={{width:'20px',height:'20px',color:'#05386B'}} />}
            <tr style={{borderBottom:'1px solid grey',cursor:'pointer'}} key={data.id}>
                <td>From : <Badge pill bg="secondary"><HiUserCircle style={{width:'30px',height:'30px'}}/> {data.To}</Badge></td>
                <div style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',width:'350px', textAlign:'center',borderBottom:'none'}}>
                <td><b>{data.Subject}</b>{data.Text}</td>
                </div>
                <td>{data.Timestamp}</td>
            </tr>
        </Table></Link>
         ))}
      </Card.Body>
    </Card>
    </div>
  )
}

export default InboxMail