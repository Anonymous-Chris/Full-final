import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import {NoMatch} from '../pages/NoMatch' 
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'
import Survey from '../survey'
import SurveyForm from '../surveyForm'
import Uploads from '../Uploads'
import fire from '../firebase/firebase'
import Adduser from '../Adduser'

export class Navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             authenticated: false
        }
    }

    componentDidMount(){
        fire.auth().onAuthStateChanged((user)=> {
            if (user) {   
              let data = sessionStorage.getItem("mySessionStorageData");
                data = JSON.parse(data);
                  this.setState({
      
                  authenticated:true
                  
              
                })
      
              }
      
              else{
                this.setState({authenticated:false})
              }
      
              let data = sessionStorage.getItem("mySessionStorageData");
              data = JSON.parse(data);
              if(data){
      
                  this.setState({
      
                    authenticated:true,
                     })
      
      
                }
      
                else if(!data){
      
                  this.setState({authenticated:false})
      
                }    
            
            })
      
    }
    
    render() {
        return (
            <div>
            <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
             {this.state.authenticated && <Route exact path="/login" component={Login} />}
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/forgot" component={ForgotPassword} />
              {this.state.authenticated && <Route exact path="/survey" component={Survey}/>}
              {this.state.authenticated && <Route exact path="/surveyform" component={SurveyForm}/>}
             { this.state.authenticated && <Route exact path="/uploads" component={Uploads}/>}
             { this.state.authenticated && <Route exact path="/adduser" component={Adduser}/>}
              {this.state.authenticated &&  <Route component={NoMatch} />}

            </Switch>
          </Router>
           
            </div>
        )
    }
}

export default Navigation
