import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    //set local state
    state = {
        value: ''
    };

    // grabs the value and set the state to the value
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
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
       <input type="text" onChange={this.handleChange}/>

        {/* update redux and route back,  while updating the redux store of current feeback values using history */}
       <button className="back" 
            onClick={()=>{this.setStore(this.props.action); 
                this.props.history.push(this.props.direction.backward);}}> {/* pass previous userresponse backwards */}
            Back</button>
        {/* update redux and route to next page, while updating the redux store of current feeback values using history    */}
       <button className="next" 
            onClick={()=>{this.setStore(this.props.action); 
                this.props.history.push(this.props.direction.forward);}}>
            Next</button>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));