import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Questions from './Questions'
import AllInfo from './AllInfo'
import '../assets/css/inner.css'

export class Main extends Component {
    state = {
       step: 1,

       //step 1
        name:'',
        courseId:'',

        //step 2
        questionOne:'',
        questionTwo:'',
        questionThree:''

    }

    nextStep=()=>{
        const {step} = this.state
        this.setState({step:step+1})
    }

    previousStep=()=>{
        const {step}=this.state
        this.setState({step:step-1})
    }

    handleChange = input =>e =>{
        this.setState({[input]:e.target.value})
    }

    showStep=()=>{
        const {step,name,courseId,questionOne,questionTwo,questionThree} = this.state
        if(step===1){
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                name={name} 
                courseId={courseId}
            />);
        } 

        if(step === 2)
        return (<Questions
            nextStep = {this.nextStep} 
            previousStep = {this.previousStep}
            handleChange = {this.handleChange} 
            questionOne={questionOne} 
            questionTwo={questionTwo}
            questionThree={questionThree}
        />);

        if(step === 3)
        return (<AllInfo 
            name={name} 
            courseId={courseId}
            questionOne={questionOne} 
            questionTwo={questionTwo}
            questionThree={questionThree}
            previousStep = {this.previousStep}
        />);
}

    
    
    render() {
        const {step} = this.state;

        return (
            <div style={{textAlign:'center'}}>
         
            <div style={{margin:'50px'}}>
      
            </div>
                <h2>Step {step} of 3</h2>
                {this.showStep()}
                <br/>
            </div>
        )
    }
}

export default Main
