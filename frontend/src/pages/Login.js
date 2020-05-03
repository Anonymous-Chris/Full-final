import React, { Component ,useEffect} from 'react'
import '../assets/css/Login.css'
import Gett from '../get'
import Postt from '../post'
import {NavigationLogin} from '../components/Navigationlogin'
import Footer from './Footer'
import {Button} from 'react-bootstrap'
import fire from '../firebase/firebase';
import axios from '../axios-order'

export default class Login extends Component{
constructor(props){
    super(props)
    this.state={
   authenticated:true
    }
}

    
    signOut =(event)=>{
        event.preventDefault();
        
        event.preventDefault();
        fire.auth().signOut().then(()=>{
            this.setState({authenticated:false,user:null})
          console.log('signout success')
          sessionStorage.clear()
            this.props.history.push(`/signin`)
        })
           
    }

    render(){ 
   

        return(
            <div>
            <div className='container'>
            <div >
            <NavigationLogin/>
           
          
           <h1>Add Students</h1>
           <Postt/> <br/>
           <Gett/>
            <Button onClick={this.signOut} className='myBtn' bstyle="primary">Logout(User)</Button>
            <br/>
           
            </div>
            </div>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
            <Footer></Footer>
            </div>
            </div>

        );
    }
}