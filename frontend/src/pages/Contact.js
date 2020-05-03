import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import Footer from './Footer';

class Contact extends Component {
  state = {
    response: '',
    post: '', post1:'', post2:'',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post ,
      post1: this.state.post1, post2:this.state.post2}),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div>
      <div style={{margin:'75px'}}>
      
      </div>
      <div className="App">
     
        <h2 style={{textAlign:'center'}}><strong >Send Email</strong></h2>
      
        <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
          <p>
           
          </p>
          <form style={{textAlign:'center'}}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <br/>
          <label>Email</label>
          <input
            type="text"
            value={this.state.post1}
            onChange={e => this.setState({ post1: e.target.value })}
          />
          <br/>
          <label>Message</label>
          <input
          type="text" style={{height:'100px'}}
          value={this.state.post2}
          onChange={e => this.setState({ post2: e.target.value })}
        />
          </form>
          <Button className='myBtn' type="submit" style={{textAlign:'center'}}>Submit</Button>
        </form>
        <br/>
        <br/>
        <p style={{textAlign:'center'}}>{this.state.responseToPost}</p>
      </div>
      <div>
      
      
      <br/>
      <br/>
      <br/>
       <br/>
      <br/>
      <br/>
      
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Contact;
