import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Scale extends Component {
    //set local state to reduxState value recieved from App.js
    state = {
        value: this.props.default,
    };
    // sets the current value selected while still on number input
    setValue = (value) => {
        this.setState({
            value: value,
        })
    }
    // update reduxState with current state when user clicks back or next to keep track of previous responses
    setStore = (action) => {
        this.props.dispatch({ 
            type: action, 
            payload: this.state.value 
        });
    }

    render() {
        return (
            <div className="slideBlock">
                <p>{this.props.question}</p>
                <input type="number"
                    onChange={(value) => this.value = value}
                    onChangeCommitted={() => this.setValue(this.value)}
                />
                {/* update redux and route back,  while updating the redux store of current feeback values using history */}
                <button className="back" 
                    onClick={() => {this.setStore(
                        this.props.action); 
                        this.props.history.push(this.props.direction.backward);}}>
                        Back</button>
                {/* update redux and route to next page, while updating the redux store of current feeback values using history    */}
                <button className="next" 
                    onClick={() => {this.setStore(
                        this.props.action); 
                        this.props.history.push(this.props.direction.forward);}}>
                            Next</button>
            </div>
        );
    }
}

// using withRouter gets access to the history object’s properties and closest routes available
// in this case helps traverse back and forth between Feeling, Undeerstanding, and Support while retaining data
export default connect()(withRouter(Scale));