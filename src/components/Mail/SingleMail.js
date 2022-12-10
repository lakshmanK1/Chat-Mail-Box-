import React from 'react'
import { Card, Container } from 'react-bootstrap'
import SingleMailIcons from '../Ui/SingleMailIcons'


function SingleMail() {
  return (
    <Container>
        <Card>
            <Card.Header>
                <SingleMailIcons/>
            </Card.Header>
            <Card.Body>
                Hello
            </Card.Body>
        </Card>  
    </Container>
  )
}

export default SingleMail