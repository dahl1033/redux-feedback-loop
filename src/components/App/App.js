import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import components for feeback form
import Home from '../Home/Home';
import Feeling from '../Scale/Feeling';
import Understanding from '../Scale/Understanding';
import Support from '../Scale/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          {/* Route for home page */}
          <Route exact path="/" component={Home} />
          {/* Route for felling form page */}
            <Route exact path="/feeling" 
            render={() => <Feeling action='ADD_FEEDBACK'
                              question={'How are you feeling today?'}
                              direction={{
                                backward: '/',
                                forward: '/understanding'
                              }}
            />}/>
            {/* Route for understanding form page */}
            <Route exact path="/understanding"
              render={() => <Understanding action='ADD_FEEDBACK'
                              question={'How well did you understand the material today?'}
                              direction={{
                                backward: '/feeling',
                                forward: '/support'
                              }}
            />} />
            {/* Route for support form page */}
            <Route exact path="/support"
              render={() => <Support action='ADD_FEEDBACK'
                              question={'How well did you feel supported today?'}
                              direction={{
                                backward: '/understanding',
                                forward: '/comments'
                              }}
            />} />
            {/* Route for comments form page */}
            <Route exact path="/comments"
              render={() => <Comments action='ADD_FEEDBACK'
                              direction={{
                                backward: '/support',
                                forward: '/review'
                              }}
            />} />
            {/* Route for review page */}
            <Route exact path="/review"
              render={() => <Review
                              direction={{
                                backward: '/comments',
                                forward: '/'
                              }}
            />} />
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
