import React, { Component } from 'react'
import '../assets/css/About.css'
import fire from '../firebase/firebase'
import Footer from './Footer'
import logo from '../assets/img/um-crest.png'
import {Container,Row} from 'reactstrap'

export default class About extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             image:'',
             imageUrl:''
        }
    }
    componentWillMount(){
        // Create a reference with an initial file path and name
 var storage = fire.storage();
// var pathReference = storage.ref('avatars/kshitij.pdf');

// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('gs://tutoring-4557d.appspot.com/avatars/schedule.pdf')
gsReference.getDownloadURL().then((url) =>{

   this.setState({image:url})
   console.log(this.state.image)
  }).catch(function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        console.log(' File doesnt exist')
        break;
  
      case 'storage/unauthorized':
       console.log( 'User doesnt have permission to access the object')
        break;
  
      case 'storage/canceled':
        console.log('User canceled the upload')
        break;
  
  
      case 'storage/unknown':
      console.log(' Unknown error occurred, inspect the server response')  
      break;
    }
  });
}
    render(){
        return(
          <div>
          <div style={{margin:'50px'}}>
      
          </div>
            <div className="container">
            <div className='rearrange '>
            <br/>
                 <h2 ><b>Schedule</b></h2>
                 <br/>
                <p>
                    <b>Monday:</b>  10:00 am - 7 :00 pm
                </p>
                
                <p>
                    <b>Tuesday:</b> 10:00 am - 7 :00 pm
                </p>

                
                <p>
                   <b> Wednesday:</b> 10:00 am - 7 :00 pm
                </p>
                
                <p>
                   <b> Thursday:</b> 10:00 am - 7 :00 pm
                </p>
                
                <p>
                    <b>Friday:</b> 10:00 am - 2 :00 pm
                </p>
                <br/>
              
                <p ><b>Courses Offered : </b>Math 115, 120, 121 123, 125, 261, 262, 263, 264, 267, and 268 </p>
              
                <br/>
                
                <p  style={{color: 'red'}}>***Schedules are subject to change! Follow the link below to find the updated schedule.</p>
             
                <br/>
              
                <p><b><i>Follow this link to find the full schedule :</i></b> 
               
                <a href={this.state.image} target="_blank"> Schedule</a>
                
                </p>
          
              
                <br/>
              
            </div>
          
            </div>
            <div>
            <div style={{margin:'100px'}}></div>
            <Footer style={{color:'#lavender'}}></Footer>
            <br/>
            </div>
            </div>
     
            
           
        );
    }
}