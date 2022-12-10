import React from 'react'
import {Card, Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

//icons
import {CgSelectR} from 'react-icons/cg'
import {HiOutlineRefresh} from 'react-icons/hi'
import {FiMoreVertical, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {MdMailOutline} from 'react-icons/md'

function MailList() {
  const {TotalMails} = useSelector(state => state.Mail);
  console.log(TotalMails);
  return (
    <div>
    <Card style={{height:'600px',backgroundColor:'#EDF5E1'}}>
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
        <Table key={data.id}>
            <tr style={{borderBottom:'1px solid grey',cursor:'pointer'}}>
                <MdMailOutline style={{width:'25px',height:'25px'}}/>
                <td>{data.To}</td>
                <td><b>{data.Subject}</b>{data.Text}</td>
                <td>{data.Timestamp}</td>
            </tr>
        </Table>
         ))}
      </Card.Body>
    </Card>
    </div>
  )
}

export default MailList