import React, { useState } from 'react'
import {Button, Card, Form, InputGroup} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { MailActions } from '../../Store/Mail-Slice'
import {SendMailData} from '../../Store/Mail-Actions'

//icons
import {MdMinimize, MdTextFormat, MdAttachFile, MdOutlineInsertLink,MdAddToDrive, MdOutlineImage} from 'react-icons/md'
import {CiMaximize1} from 'react-icons/ci'
import {RxCross2} from 'react-icons/rx'
import {GrEmoji} from 'react-icons/gr'
import {AiOutlineMore} from 'react-icons/ai'
import {HiOutlineTrash} from 'react-icons/hi'

function ComposeMail(props) {
    const dispatch = useDispatch();

    const [toMail, setToMail] = useState('');
    const [subjectMail, setSubjectMail] = useState('');
    const [textMail, setTextMail] = useState('');

    let updateDate = new Date();
    let date = new Date();

    let convertedTime = date.toLocaleString ('en-US', {
        day:    '2-digit',
        month:  '2-digit',
        year:   'numeric',
        hour:   'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    }
) ;
    

    const FormSubmitHandler = (e) => {
        e.preventDefault();

        if(!toMail || !subjectMail || !textMail ){
            alert("please fill all the required fields");
        }else {
            let Data = {
                To:toMail,
                Subject:subjectMail,
                Text:textMail,
                Timestamp:String(convertedTime)
            }

            dispatch(MailActions.addMail(Data));
            
            alert('Email successfully send..');
            dispatch(MailActions.closeCompose());
        }
    }

  return (
    <div>
        <Card>
            <Card.Header variant='dark'>
                <div style={{float:'left'}}>
                <Card.Text>New message</Card.Text>
                </div>
                <div style={{float:'right'}}>
                    <MdMinimize style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/>
                    <CiMaximize1 style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/>
                    <RxCross2 style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}} onClick={()=>dispatch(MailActions.closeCompose())}/>
                </div>
            </Card.Header>
            <Form onSubmit={FormSubmitHandler}>
            <Card.Body>
                <div>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">To</InputGroup.Text>
                  <Form.Control
                    placeholder="Recipients"
                    aria-label="Username"
                    aria-describedby="basic-addon1" defaultValue={toMail} onChange={(e)=>setToMail(e.target.value)}/>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
                  <Form.Control
                    placeholder="subject"
                    aria-label="Username"
                    aria-describedby="basic-addon1" defaultValue={subjectMail} onChange={(e)=>setSubjectMail(e.target.value)}/>
                </InputGroup>
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                  defaultValue={textMail} onChange={(e)=>setTextMail(e.target.value)}
                />
                </div>

            </Card.Body>
            <Card.Footer>
                <div style={{float:'left'}}>
                <Button type='submit' variant="primary">Send</Button>
                <MdTextFormat style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/><MdAttachFile style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/>
                <MdOutlineInsertLink style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/>
                <GrEmoji style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/><MdAddToDrive style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/>
                <MdOutlineImage style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/><AiOutlineMore style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}}/>
                </div>
                <div style={{float:'right'}}>
                    <HiOutlineTrash style={{width:'20px',height:'20px',marginLeft:'10px',cursor:'pointer'}} onClick={()=>dispatch(MailActions.closeCompose())}/>
                </div>
            </Card.Footer>
            </Form>
        </Card>
    </div>
  )
}

export default ComposeMail