import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import components
import Home from '../Home/Home';
import Scale from '../Scale/Scale';
import Comments from '../Comments/Comments'

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
          <Route exact path="/" component={Home} />
            <Route exact path="/feeling" 
            render={() => <Scale action='SET_FEELING'
                              question={'How are you feeling today?'}
                              default={this.props.feeling}
                              direction={{
                                backward: '/',
                                forward: '/understanding'
                              }}
            />}/>

            <Route exact path="/understanding"
              render={() => <Scale action='SET_UNDERSTANDING'
                              question={'How well did you understand the material today?'}
                              default={this.props.understanding}
                              direction={{
                                backward: '/feeling',
                                forward: '/support'
                              }}
              />} />

            <Route exact path="/support"
              render={() => <Scale action='SET_SUPPORT'
                              question={'How well did you feel supported today?'}
                              default={this.props.support}
                              direction={{
                                backward: '/understanding',
                                forward: '/comments'
                              }}
              />} />

            <Route exact path="/comments"
              render={() => <Comments
                              default={this.props.comments}
                              direction={{
                                backward: '/support',
                                forward: '/review'
                              }}
                />} />
              
            {/* <Route exact path="/review"
              render={() => <Review/>} /> */}
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
