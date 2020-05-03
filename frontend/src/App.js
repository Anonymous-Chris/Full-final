import React,{ Component } from 'react';
import './App.css';
import {NavigationBar} from './components/NavigationBar'
import Navigation from './components/Navigation'

class App extends Component{

  render(){

    return(
      <div>
      

      <div className="App">
     
      
      <React.Fragment>
      
      <NavigationBar />
      <Navigation/>
       
    
      </React.Fragment>
      
      </div>
      </div>
    );

  }

}
export default App;


  
