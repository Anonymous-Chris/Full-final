import React, { Component } from 'react'
import axios from './axios-order'
import './index.css'
import {Button} from 'react-bootstrap'


export class get extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts:[],
            time:new Date().toLocaleTimeString(),
            date:new Date().toLocaleDateString(),
            emptyVal:'000000',
            emptyString:'******'
            
        }
    }
    componentDidMount(){
        axios.get('/posts.json').then((res)=>{
           // console.log(res)
            const fetchedData = []
            for(let key in res.data){
                fetchedData.unshift({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({posts:fetchedData})
         //   console.log(this.state.posts)
            
        })

    }

logoutStudents(index,userId,name,courseId,clockinTime,date){

    var clockOutTime= this.state.time
  // console.log(clockOutTime)
 
   
   var timeStart = new Date(`${date} ,${clockinTime}`)
//    console.log(timeStart)
   var timeEnd = new Date(`${date},${clockOutTime}`)
//    console.log(timeEnd)


if (timeEnd>timeStart){
var differenece = timeEnd-timeStart
var momentValue = new Date(differenece)
var hoursSpent = momentValue/3600000

console.log(hoursSpent)



    // console.log(new Date().getHours().toLocaleString())
  
    axios.post('/alldata.json',{userId:userId,name:name,courseId:courseId,time:clockinTime,date:date,hoursSpent
    :hoursSpent}).then(res=>{
      //  console.log(res)
        // window.location.reload(false)
    })
}

 else{
     console.log('Error calculating hours  spent')
 }
      const url ='/posts'
        axios.delete((`${url}/${index}.json`)).then(res=>{
            //window.location.reload(false) 
        }).then(res=>{
            if(window.confirm('Would you mind taking a short survey? It will be really helpful to know your responses')){
                window.location=('/surveyform')
           }
           else{
            window.location.reload(false) 
           }
        })
   
    }


    clickMeId(row){
        const data = this.state.posts
        const url ='/posts'
        const index=data.id

        let userId=prompt('Update Student Id')
        console.log(userId)

       if (userId !==null){
              if(row.id){
          axios.put(`${url}/${row.id}.json`,{userId:userId || '000000',name:row.name,courseId:row.courseId,time:row.time,date:row.date
        }).then(res=>{
           //   console.log(res)
              window.location.reload(false)
          })
      }


    } 
    else{
        if(row.id){
            axios.put(`${url}/${row.id}.json`,{userId:this.state.emptyVal,name:row.name,courseId:row.courseId,time:row.time,date:row.date
          }).then(res=>{
             //   console.log(res)
                window.location.reload(false)
            })
        }
    }


    
 
    
 
    }

    clickMeName(row){
        const data = this.state.posts
        
        const url ='/posts'
        const index=data.id
        let userName=prompt('Update Student Name')
       // console.log(userId)
       if (userName !==null){
        if(row.id){
            axios.put(`${url}/${row.id}.json`,{userId:row.userId,name:userName || '******',courseId:row.courseId,time:row.time,date:row.date
          }).then(res=>{
             //   console.log(res)
                window.location.reload(false)
            })
        }
       
    } else {
        if(row.id){
            axios.put(`${url}/${row.id}.json`,{userId:row.userId,name:this.state.emptyString,courseId:row.courseId,time:row.time,date:row.date
          }).then(res=>{
             //   console.log(res)
                window.location.reload(false)
            })
        }
    
    }

    }

    clickMecourseId(row){
       
        const data = this.state.posts
         
        const url ='/posts'
        const index=data.id
        let courseId=prompt('Update Course Id')
       // console.log(userId)
  
        
       if (courseId !==null){
        this.setState({courseId:courseId})
        if(row.id){
            axios.put(`${url}/${row.id}.json`,{userId:row.userId ,name:row.name,courseId:courseId || '000000',time:row.time,date:row.date
        }).then(res=>{
     //   console.log(res)
        window.location.reload(false)
        })
    }   

    } else{
        if(row.id){
            axios.put(`${url}/${row.id}.json`,{userId:row.userId,name:row.name,courseId:this.state.emptyVal,time:row.time,date:row.date
          }).then(res=>{
            //    console.log(res)
                window.location.reload(false)
            })
        }
    }

    }




    render() {
        const {userId, title,body}= this.state
        return (
            <div className='container'>
            <table className="table">
            <thead >
            <tr>
            <th className="th">Student Id</th>
            <th className="th">Name</th>
            <th className="th">Course</th>
            <th className="th">Start Time</th>
            <th className="th">Date</th>
            
            </tr>
            </thead>
   
            <tbody>
            {
                this.state.posts.map((row)=>(
                    <tr>
 
                    <td ><a onClick={this.clickMeId.bind(this,row)}>{row.userId}</a></td>
                    <td> <a onClick={this.clickMeName.bind(this,row)}>{row.name}</a></td>
                    <td><a onClick={this.clickMecourseId.bind(this,row)}>{row.courseId}</a></td>
                    <td>{row.time}</td>
                    <td>{row.date}</td>
                    
                    <Button onClick={()=>this.logoutStudents(row.id,row.userId,row.name,row.courseId,row.time,row.date)} className='myBtn' bstyle="primary">  <b>    <svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                  </svg></b></Button>
                 

                    </tr>
                    
                ))
            }
            </tbody>
            </table>
            
            </div>
        )
    }
}

export default get
