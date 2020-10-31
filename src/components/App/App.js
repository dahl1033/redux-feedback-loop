import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router><exact path="/" component={Home} />
            <Route exact path="/feeling" 
            render={() => <Scale action='SET_FEELING'/>} />

            <Route exact path="/understanding"
              render={() => <Scale action='SET_UNDERSTANDING'/>} />

            <Route exact path="/support"
              render={() => <Scale action='SET_SUPPORT'/>} />

            <Route exact path="/comments"
              render={() => <Comments/>} />
              
            <Route exact path="/review"
              render={() => <Review/>} />
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
