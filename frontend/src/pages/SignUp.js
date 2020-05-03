import React ,{ Component} from 'react';
import fire from '../firebase/firebase'
import Footer from'./Footer'
import '../assets/css/Login.css'
import axios from '../axios-order'
class SignUpForm extends Component{


    constructor(props){

        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.signUpAuth= this.signUpAuth.bind(this);
        this.state={

            name:'',
            email:'',
            firstPassword:'',
            confirmedPassword:''
            
       
        }
    }

    handleChange=e=> this.setState({[e.target.name]: e.target.value});
    
    signUpAuth =e=>{
        
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.confirmedPassword).then((data)=>{
            var UID = data.user.uid;
            var postData ={
              
                name: this.state.name
            };
            fire.database().ref().child("Users").child(UID).set(postData);
            var count = 0
            count =count+1
            // console.log(count)

             axios.post('/count.json',count).then(res=>{
                 console.log('count has been sent to firebase')
             })
            

            fire.auth().signOut().then(()=> {
             
            });
         
            
            this.props.history.push('/signin');

            }).catch((err)=>{
                window.alert(err)
            })     
        }
        
        alertNotMatch=(event)=>{
            event.preventDefault()
            window.alert('Password does not match')
        }
    render(){


        return(
            <div > 
            <div style={{margin:'50px'}}>
      
            </div>          
            <div className="container">
           
           
            <div style={{backgroundColor:'white', width:'90%', marginRight:'auto', marginLeft:'auto'}}>
            <div >
            <br/>
                <label for="exampleInputEmail1" aria-describedby="email">Email address</label>
                <br/>
                <input style={{width:'60%'}}  value={this.state.email} onChange={this.handleChange} name="email" type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <br/>
            </div>
            <div >
                <label for="exampleInputPassword1" aria-describedby="password">Password</label>
                <br/>
                <input  style={{width:'60%'}}  value={this.state.firstPassword} onChange={this.handleChange} name="firstPassword" type="password"  id="firstInputPassword1" placeholder="Password"/>
                
            </div>

            <div >
                <br/>
                <label for="exampleInputPassword1" aria-describedby="password">Confirm Password</label>
                <br/>
                <input style={{width:'60%'}}  value={this.state.confirmedPassword} onChange={this.handleChange} name="confirmedPassword" type="password" id="confirmInputPassword1" placeholder="Password"/>
                <br/>
            </div>
            <br/>
            { this.state.firstPassword === this.state.confirmedPassword ?
            <button type="submit" onClick={this.signUpAuth} className="btn btn-primary">Submit</button> : <button type="submit" onClick={this.alertNotMatch} className="btn btn-primary">Submit</button>
            }
            <br/>
            <br/>
            <p className="sign-in">
            Already registered <a href="/signin">sign in?</a>
            <br/>
            <br/>
        </p>
        </div>
        </div>
            <div>
            <br/>
            <br/>
            <br/>
           
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </div>
            </div>
        )
    }







}

export default SignUpForm;