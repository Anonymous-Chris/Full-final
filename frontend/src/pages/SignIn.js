import React ,{Component} from 'react';
import fire from '../firebase/firebase';
import Footer from './Footer';
import '../assets/css/Login.css'
import axios from '../axios-order'
import {Container,Form,FormGroup, Label, Input,Button,Row} from 'reactstrap'

class SignInForm extends Component{

    constructor(props){
        super(props);
        this.loginAuth= this.loginAuth.bind(this);
        this.handleChange= this.handleChange.bind(this);

        this.state= { email: '', password: '', authenticated:'', user:'',count:[]}
       
    }

    componentDidMount(){
        this.handleChange.bind(this);
        this.loginAuth.bind(this);
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({authenticated:true})
        //        console.log(this.state.authenticated)
            }
            
        })

        axios.get('/count.json').then((res)=>{
            const fetchedData = []
            for(let key in res.data){
                fetchedData.unshift({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({count:fetchedData})
         //   console.log(this.state.count.length)
        })
        
        
        }
    handleChange=e=> this.setState({[e.target.name]: e.target.value});

    signOut =(event)=>{
        event.preventDefault();
        this.setState({authenticated:false,
        user:null})


            this.props.history.push(`/login`)
    }

    loginAuth=(event)=>{
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((data)=>{

        //    var User =""
        //        User = User.replace(/\s/g, '');

        //     User = User.toLowerCase();
        var user = fire.auth().currentUser;
        console.log(user)

            this.setState({authenticated:true})
             let obj ={authenticated: this.state.authenticated}
             console.log(this.state.authenticated)
             sessionStorage.setItem('mySessionStorageData', JSON.stringify(obj));

            this.props.history.push(`/login`)  
            window.location.reload(false) 
        }).catch((error)=>{
            alert(error)
        }) 

   
    }

    
        
    render(){

    //  let props = {
    //      authenticated :this.state.authenticated,
    //      userType: this.state.userType

    //  }



        return(

            <div>
            <div style={{margin:'50px'}}>
      
            </div>
                <div className="container">

            <div className="card">
                    <div className="card-body">
                        <h3 className="card-title align center">Login Form</h3>
    
                        <Form id="loginForm">
                        <FormGroup>
                        <div className="form-group">
                            <Label for="exampleInputEmail1" style={{ marginLeft:'auto', marginRight:'auto'}} sm={2}>Email address</Label>
                            <Input style={{width:'80%', marginLeft:'auto',marginRight:'auto'}} value={this.state.email} onChange={this.handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        </FormGroup>

                        <FormGroup>
                        <div className="form-group">
                            <Label for="exampleInputPassword1" style={{ marginLeft:'auto', marginRight:'auto'}}sm={2}>Password</Label>
                            <Input style={{width:'80%', marginLeft:'auto',marginRight:'auto'}} value={this.state.password} onChange={this.handleChange} name="password"  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        </FormGroup>
                        <FormGroup>
                        <div className="form-group">
                        <div style={{textAlign:'center', display:'inline-block',marginLeft:'auto',marginRight:'auto'}}className="custom-control custom-checkbox" >
                          
                            <Input type="checkbox" className="custom-control-input col-offset-4" id="customCheck1"/>
                            <Label className="custom-control-label" htmlFor="customCheck1">Remember me</Label>
                        </div>
                    </div>
                    </FormGroup>
                        <Button type="submit" onClick={this.loginAuth} className="btn btn-primary">Submit</Button>
                    </Form>

                    {this.state.count.length <1  ?<p className="register text-right">
                     <a href="/signup">Register Here</a>
                     </p>: null}
                     
                    <p className="forgot-password text-right">
                     <a href="/forgot">Forgot Password?</a>
                     </p>
                

                   
                   </div>
                </div>
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



export default SignInForm;