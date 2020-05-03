import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Row, Col, Button} from 'react-bootstrap'
import '../assets/css/Home.css'
import chris from  '../assets/img/chris.jpg'
import madhav from '../assets/img/madhav.jpg'
import glenn from '../assets/img/glenn.jpeg'
import Footer from './Footer'


export default class Home extends Component{
    render(){
        return(
            <div>
            <div className=" container">
            
                <Jumbotron style={{backgroundColor:'#e9ecef', paddingBottom:'5px'}}>
                    <h2 style={{textAlign:'center'}}>Welcome to Mathematics Tutoring Website!</h2>
                    <p> You can find out about schedules of other tutors and 
                    you could contact the department if you have any questions as well!</p>
                    
                    <div className='row'>
                    <div className="col lg-4">
                    
                    </div>
                    <div className='col lg-4 md-4 sm-12 xs-12'>  <Button onClick ={()=>{
                        window.location = 'https://booking.appointy.com/ummathlab'
                    }
    
                    } className="myButton1" bstyle="primary"> Appointment</Button></div>
                
                    <div className='col lg-4 md-4 sm-12 xs-12'>      <Link to ="/signin">
                    <Button className="myButton1" bstyle="primary">Login</Button>
                    </Link></div>
                    <div className="col lg-4">
                    
                    </div>
          
                </div>
                </Jumbotron>
              <div className="colorbackground" style={{marginTop:'40px'}} >

              <Row xs="1" sm="2" md="3" lg="3" className="text-center padding 10px margin 10px">
              <Col xs={{size:'auto'}} sm={{size:'auto'}} className="person-wrapper margin 10px padding 5px">
<img  className="student" src={chris} alt="student" responsive/>
    <h3>Chris L</h3>
    <p> I really enjoyed getting help from the tutors during my four years 
    here at The University of Mississippi. I couldn't have made without the 
    help from Mathematics Department.</p>
</Col>

<Col xs={{size:'auto'}} sm={{size:'auto'}} className="person-wrapper 10px padding 5px ">
<img  className="student" src={glenn} alt="student" responsive/>
    <h3>Austin Dangi</h3>
    <p> Students are unique. 
    They may go to the same school and be in the same grade as other students,
     but they do not think or learn alike. The tutors here at Olemiss change the way they teach sometimes so the student can learn in the best way for him/her.</p>
</Col>

<Col xs={{size:'auto'}} sm={{size:'auto'}} className="person-wrapper margin 10px padding 5px">
<img  className="student" src={madhav} alt="student" responsive/>
    <h3>Madhav Koirala</h3>
    <p> There is a great difference between knowing and understanding: you can know a lot but if you are in trouble, the mathematics department will help you in the best possible</p>
</Col>


          </Row>
              </div>
             
            </div>

          <Footer/>
    

            </div>
         

        );
    }
}