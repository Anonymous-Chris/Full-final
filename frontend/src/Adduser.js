import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import secondaryfire from './firebase/firebase'
import fire from './firebase/firebase'
import axios from './axios-order'
import Footer from './pages/Footer'

let firestore = fire.firestore()

export class Adduser extends Component {

    constructor(props) {
        super(props)
        this.handleChange= this.handleChange.bind(this);
        this.createUser= this.createUser.bind(this);
        this.state = {
             email: '',
             password: '',
             userType:'Admin',
             staffAll:[],

        }
    }


    handleChange=(e)=> this.setState({[e.target.name]: e.target.value});
    
    createUser= async(event) =>{
        event.preventDefault()
        
        secondaryfire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((data)=>{
            var UID = data.user.uid
            console.log(UID)

        

            var postData={
                email:this.state.email,
                userType: 'Admin'
            }

            secondaryfire.database().ref().child('Users').child('Staff').child(UID).set(postData);

            window.alert('User has been added')
            

            secondaryfire.auth().signOut()

            return firestore.collection('users').doc(UID).set({
                bio: this.state.userType
                
            })
            
             
          
        }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            window.alert(errorMessage)
          });     
         
    }

componentDidMount(){
    axios.get('/Users/Staff.json').then((res)=>{
       // console.log(res)
         const fetchedData = []
         for(let key in res.data){
             fetchedData.unshift({
                 ...res.data[key],
                 id:key
             })
         }
       //  console.log(fetchedData)
         this.setState({staffAll:fetchedData})
         //console.log(this.state.staffAll)
         
         
     })
 

}

    reDirect =(event) =>{
        event.preventDefault()
        window.location='/login'
    }

showUser=(e)=>{
    e.preventDefault()
    console.log(this.state.fetchedData)
}
         

deleteUser=(event)=>{
    event.preventDefault()

    var user = fire.auth().currentUser;
    if (user){
    var UID=(user.uid)
    console.log(UID)
    }

    const url ='/Users/Staff'
     axios.delete(`${url}/${UID}.json`).then((res)=>{
        console.log(res)
        console.log('user deleted in axios as well')
     }).then((res)=>{
        window.location=('/signin') 
     }).catch((errorMessage)=>{
         console.log(errorMessage)
     })

     if(user){
    user.delete().then(function() {
    console.log('user deleted')
    }).catch(function(error) {
    console.log('user not  deleted')
    });
     }
  
}



    render() {
        return (
            <div style={{textAlign:'center'}}>
            <div style={{margin:'20px'}}>
      
            </div>
            <div className='container'>
            <br/>
            <Button onClick={this.reDirect} >Dashboard</Button>
          <br/>
            <br/>
            <div>
            <h2 style={{textAlign:'center'}}><b>Create Admin</b></h2>
         
            <br/>
            <form style={{textAlign:'center'}}>
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <br/>
            <label>Password</label>
            <input
              type="text"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <br/>

            </form>
            <Button className='myBtn' type="submit" onClick={this.createUser} style={{textAlign:'center'}}>Submit</Button>
            
            </div>
            <br/>
            <div>
  
            <h2 style={{textAlign:'center'}}><b>List of Admin</b></h2>
            <br/>
            {this.state.staffAll.map((row)=>(
                <table>
                <thead>
                <tr>
                <td>
                    <b>Email : </b> {row.email} | <b>User Type: </b> {row.userType} | 
                   
                </td>
                </tr>
                </thead>
                </table>
            ))
         
            }

           
           
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
     
            <br/>
            <Button onClick={this.deleteUser} className='myBtn' bstyle="primary" style={{textAlign:'center'}}>Delete(User)</Button>
            <Footer/>
            </div>
        )
    }
}

export default Adduser
