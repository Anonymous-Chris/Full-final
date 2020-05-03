import React, { Component } from 'react'
import axios from '../axios-order'
import Footer from '../pages/Footer'

export class AllInfo extends Component {
    constructor(props) {
        super(props)
    }
    

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    SubmitHandler=(event)=>{
        event.preventDefault()
        axios.post('/survey.json',this.props).then(res=>{
            window.alert('Thank you for your time')
            window.location='/login'
        })

    }

    reDirect=(event)=>{
        event.preventDefault()
        window.location='/login'
    }
    render() {
        const {name,courseId, questionOne, questionTwo, questionThree} = this.props
        return (
            <div>
            <div className='container'>
            <h2>Here is the information you entered:</h2>
            <br/>
            Tutors Name: <b>{name}</b><br />
            Course Id: <b>{courseId}</b><br />
            Question One: <b>{questionOne}</b><br />
            Question Two: <b>{questionTwo}</b><br />
            Question Three: <b>{questionThree}</b><br />
            <br/>
            <button className="Next" onClick={this.reDirect}>Dashboard</button>
            <button className="Back" onClick={this.back}>
                « Back
            </button>
            <button className="Back" onClick={this.SubmitHandler}>Submit</button>
                
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
            <br/>
            <div style={{margin:'25px'}}></div>
            
                <Footer></Footer>
            </div>
            </div>
        )
    }
}

export default AllInfo
