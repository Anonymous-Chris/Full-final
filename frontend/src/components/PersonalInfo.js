import React, { Component } from 'react'
import Footer from '../pages/Footer'
import '../assets/css/all.css'

export class PersonalInfo
 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    reDirect=(event)=>{
        event.preventDefault()
        window.location='/login'
    }
    
    render() {
        const { name, courseId, handleChange } = this.props;
        return (
            <div>
            
            <div className='container'>
            <div className='Info'>
            <h2>Info</h2>
            <br/>

            <label> Tutors Name :   </label>
            <input 
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name (Optional)"
                    onChange={handleChange('name')}
                />
            <label> Course Id: </label>
            <label>
            <input 
                    type="text"
                    name="courseId"
                    value={courseId}
                    placeholder="Course Id (Optional)"
                    onChange={handleChange('courseId')}
                />
                </label>
                <button className="Next" onClick={this.reDirect}>Dashboard</button>
            <button className="Next" onClick={this.continue}>
                Next »
            </button>
        </div>
        </div>
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
            <div>
            <div style={{margin:'20px'}}></div>
            <Footer></Footer>
            </div>
        </div>
    );
}
}

export default PersonalInfo


