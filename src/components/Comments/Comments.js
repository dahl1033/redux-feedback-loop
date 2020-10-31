import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    //set local state to reduxState value recieved from App.js
    state={
        value: this.props.default
    }
    // sets the current value of comments while still typing user input
    setValue=(event)=>{
        this.setState({
            value: event.target.value,
        })
    }
    // update reduxState with current state when user clicks back or next to keep track of previous responses
    setStore=(actionType)=>{
        this.props.dispatch({
            type: actionType, 
            payload: this.state.value
        });
    }

  render() {
    return (
      <div className="commentsBlock">
       <p>Is there anything else you'd like us to know?</p>
       <input className="commentsText"
            onChange={this.setValue}  
            />
       <button className="back" 
            onClick={()=>{this.setStore('SET_COMMENTS'); 
                this.props.history.push(this.props.direction.backward);}}>
            Back</button>
       <button className="next" 
            onClick={()=>{this.setStore('SET_COMMENTS'); 
                this.props.history.push(this.props.direction.f);}}>
            Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));