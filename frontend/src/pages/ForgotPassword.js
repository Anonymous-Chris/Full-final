import React, { useState } from 'react'
import '../assets/css/Contact.css'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import fire from '../firebase/firebase'
import Footer from '../pages/Footer'

 function ForgotPassword(){
   
    const [email,setEmail]=useState('')
   


  const handleClick=(e)=>{
    e.preventDefault()
    if(e.target.id==='email'){
        setEmail(e.target.value)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const dataToSubimt={
      email:email
    }
    console.log(dataToSubimt)

    var auth = fire.auth();
    var emailAddress = email

    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
        console.log('Reset Email has been sent.')
        if(window.confirm('Reset email has been sent! Check your inbox')){
            window.location=('/signin')
       }
    }).catch(function(error) {
      // An error happened.
      window.alert(error)
    });
   

  }

    return(
      <div>
      <div style={{margin:'50px'}}>
      
      </div>

      <div className='container'>
        <div className='Contact' >
        <Form onSubmit={handleSubmit} style={{textAlign:'center'}}>
        <FormGroup>
        <Label for="email">Email:</Label>
        <Input style={{width:'70%', marginLeft:'auto',marginRight:'auto'}}
        id="email"
        type='email'
        name='email'
       value={email}
        onChange={handleClick} 
        placeholder='Enter your Email' />
    </FormGroup>

         <Button onClick={handleSubmit} >Submit</Button>
        </Form>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        </div>
        <div>
        <div style={{margin:'50px'}}></div>
        <Footer/>
        </div>
        </div>
    );
}

export default ForgotPassword;





