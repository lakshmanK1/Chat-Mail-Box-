import React,{useRef} from 'react'
import { Container, Form, Button, Card} from 'react-bootstrap'

function LogIn() {
    const userInputEmail = useRef();
    const userInputPassword = useRef();

    const FormSubmitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = userInputEmail.current.value;
        const enteredPassword = userInputPassword.current.value;

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc6zCAz0P-PabWrF2Xdnt7LoKPPtkwEfM';
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            console.log(res);
            if(res.ok){
                console.log('Successfull LoggedIn');
                return res.json();
            }else{
                return res.json().then((data)=>{
                    if(data && data.error && data.error.message){
                        let errMessage = "Login Failed, " + data.error.message;
                        throw new Error(errMessage);
                    }
                })
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <Card border="success" className='shadow-lg' style={{ width: '38rem'}}>
        <Card.Body>
        <Form style={{width:'520px'}} onSubmit={FormSubmitHandler}>
            <Form.Group>
                <h4>LOGIN</h4>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control type='email' id='email' placeholder='enter your email..' ref={userInputEmail}/>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control type='password' id='password' placeholder='enter your password..' ref={userInputPassword}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='m-1'>Log in</Button>
        </Form>
        </Card.Body>
    </Card>
  )
}

export default LogIn