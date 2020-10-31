import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="homePage">
       <h1>Welcome to Feedback Tracker</h1>
       <h2>Click to start!</h2>
       <button onClick={()=>this.props.history.push('/feeling')}>New Feedback</button>
      </div>
    );
  }
}

export default withRouter(Home);