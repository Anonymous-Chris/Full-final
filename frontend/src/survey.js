import React, { Component } from 'react'
import axios from './axios-order'
import 'react-simplebox/build/styles.css'
import Footer from './pages/Footer'
import './assets/css/all.css'
import { Button} from 'react-bootstrap'

export class survey extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            survey:[]
            
        }
    }

    componentDidMount(){
        axios.get('/survey.json').then((res)=>{
            console.log(res)
            const fetchedData = []
            for(let key in res.data){
                fetchedData.unshift({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({survey:fetchedData})
            console.log(this.state.survey)
            
        })

    }

    reDirect=(event)=>{
        event.preventDefault()
        window.location='/login'
    }

    removeResponse=(index)=>{
        const url='/survey'
        if(window.confirm('Do you really want to remove it?')){
        axios.delete(`${url}/${index}.json`).then(res=>{

            window.location.reload(false) 
        })
    }
    }
    
    render() {
        return (
          <div>
          <div style={{margin:'20px'}}>
      
          </div>
       
          <div className='container' style={{textAlign:'center',marginRight:'auto',marginLeft:'auto'}}>
          <h1>Responses</h1>
          <br/>
          <p>Question 1: Do you have a better understanding of the materials now?</p>
          <p>Question 2: Rate your Tutor on the scale of 1-10!</p>
          <p>Question 3: Any comments you would like to say to us!</p>
          <Button onClick={this.reDirect} className='myBtn' bstyle="primary">Dashboard</Button>
          <br/>
          <br/>
           {this.state.survey.map((row)=>(
            <table className='table'>
              <tr >
              <td>|<b>Tutor's Name:</b> {row.name} | <b>Course ID: </b>{row.courseId} | <b>Response 1: </b> {row.questionOne}
              | <b>Response 2: </b>{row.questionTwo} | <b>Response 3: </b>{row.questionThree} |
              </td>
              
   
              
              <button onClick={()=>this.removeResponse(row.id)} className=' col lg-4 md-4 sm-12 xs-12 ' style={{marginLeft:'1px'}} bstyle="primary" type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
              </tr>
              </table>
              
           
  
           )) 
 
           }
           </div>

           <div>
           <br/>
           <br/>
          

           <Footer></Footer>
           </div>
           </div>
        )
    }
}

export default survey
