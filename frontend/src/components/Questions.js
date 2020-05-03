import React, { Component } from 'react'
import Footer from '../pages/Footer'

export class Questions extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    reDirect=(event)=>{
        event.preventDefault()
        window.location='/login'
    }
    render() {

        const {questionOne, questionTwo, questionThree,handleChange} = this.props
        return (
            <div>
            <div className='container'>
            <div>
                <h2>Questions</h2>
                <br/>
                <label> Question 1 : Do you have a better understanding of the materials now?</label>
                    <input 
                        type="text"
                        name="questionOne"
                        value={questionOne}
                        onChange={handleChange('questionOne')}
                        placeholder="Answer"
                    />
                 
                <label> Question 2:  Rate your Tutor on the scale of 1-10!</label>
                    <input 
                        type="text"
                        name="questionTwo"
                        value={questionTwo}
                        onChange={handleChange('questionTwo')}
                        placeholder="Answer"
                    />
                
                <label> Question 3: Any comments you would like to say to us!
               <br/>
                
                    <input 
                        type="text"
                        name="questionThree"
                        value={questionThree}
                        onChange={handleChange('questionThree')}
                        placeholder="Answer"
                    />
                
                    </label>
                    <button className="Next" onClick={this.reDirect}>Dashboard</button>
                                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
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
            <div style={{margin:'25px'}}></div>
          
            <Footer></Footer>
            </div>
            </div>
        )
    }
}

export default Questions
