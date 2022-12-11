import React from 'react'
import { Card, Container } from 'react-bootstrap'
import NavBar from '../Navigation/NavBar'
import SideBar from '../Ui/SideBar'
import InboxSingleMailIcons from '../Ui/InboxSingleMailIcons'
import { useSelector } from 'react-redux'

import {FaUserCircle} from 'react-icons/fa'



function InboxSingleMail() {

  const mailData = useSelector(state => state.Mail.selectedMailDetails);

  console.log(mailData);
  return (
    <div>
      <NavBar/>
    <Container>
      <SideBar/>
        <Card style={{height:'600px'}}>
            <Card.Header>
                <InboxSingleMailIcons />
            </Card.Header>
            <Card.Body>
                <div>
                <h3><b>{mailData.Subject}</b></h3>
                </div>

                <div style={{float:'right'}}>
                <p>{mailData.Timestamp}</p>
                </div>


                <div style={{float:'left'}}>
                <p><FaUserCircle style={{width:'30px',height:'30px',color:'lightskyblue',marginRight:'8px'}}/>{mailData.To}</p>
                </div><br/>
             
                <div style={{marginTop:'25px'}} >
                <p>{mailData.Text}</p>
                </div>
                
               
            </Card.Body>
        </Card>  
    </Container>
    </div>
  )
}

export default InboxSingleMail