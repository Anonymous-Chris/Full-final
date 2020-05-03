import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <div className='container'>
      <footer>
        <ul className="site-link" style={{textAlign:'center'}}>
         
          <hr></hr>
          <br/>
            <p>The University of Mississippi
            <br/>
            
            P.O. Box 1848, University, MS 38677 USA
            <br/>
            (662) 915-7211
            <br/>
            <br/>
            Copyright &copy; {this.state.year}. The University of Mississippi. All rights reserved
           </p>
      
        </ul>
      </footer>
      </div>
    );
  }
}

export default Footer;