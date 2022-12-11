import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import NavBar from '../Navigation/NavBar'
import SideBar from '../Ui/SideBar'
import SingleMailIcons from '../Ui/SingleMailIcons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MailActions } from '../../Store/Mail-Slice'


function SingleMail() {

  const mailData = useSelector(state => state.Mail.selectedMailDetails);

  console.log(mailData);
  return (
    <div>
      <NavBar/>
    <Container>
      <SideBar/>
        <Card style={{height:'600px'}}>
            <Card.Header>
                <SingleMailIcons />
            </Card.Header>
            <Card.Body>
                <h1>{mailData.To}</h1>
                <h3><b>{mailData.Subject}</b></h3>
                <p>{mailData.Text}</p>
                <p>{mailData.Timestamp}</p>
            </Card.Body>
        </Card>  
    </Container>
    </div>
  )
}

export default SingleMail