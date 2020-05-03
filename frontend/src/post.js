import React, { Component } from 'react'
import axios from './axios-order'
import {Button} from 'react-bootstrap'

export class post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:'',
            name:'',
            courseId:'',
            time:new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
            

        

    }
    }

    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        
    }
    submitHandler=(event)=>{
        event.preventDefault()
      //  console.log(this.state)
     //  for(var i=0; i<50; i++){
      //axios.post('/alldata.json',this.state.pushData[i]).then(res=>{
    //     axios.post('/alldata.json',this.state).then(res=>{
    //     console.log('all data working')
    // })
        //axios.post('/posts.json',this.state.pushData[i]).then(res=>{
      axios.post('/posts.json',this.state).then(res=>{
            console.log(res)
            window.location.reload(false)
        })

   // }
        
  }
    
    render() {
        const {userId, name,courseId}= this.state
        return (
            <div className='container'>
            <form>
            <div>
        
            <label>Student Id: </label><br/>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div>
            
            <div>
            <label>Name: </label><br/>
            <input type="text" name="name" value={name} onChange={this.changeHandler}/>
            </div>

            
            <div>
            <label>Course Id: </label><br/>
            <input type="text" name="courseId" value={courseId
            } onChange={this.changeHandler}/>
            </div>
            <Button onClick={this.submitHandler} className='myBtn' bstyle="primary">Add</Button>
            </form>
            
            </div>
        )
    }
}

export default post
