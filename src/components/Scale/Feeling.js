import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {

    //set local state
    state = {
        feeling: 3
    };

    // grabs the value and set the state to the value
    handleChange = (event) => {
        console.log(this.state);
        this.setState({
            feeling: event.target.value
        })
    }

    // update reduxState with current state when user clicks back or next to keep track of previous responses
    setStore = () => {
        console.log(this.state );
        this.props.dispatch({ 
            type: this.props.action, 
            payload: this.state.feeling 
        });
    }

    render() {
        return (
            <div className="scaleBlock">
                <p>{this.props.question}</p>
                
                <input type="number" min="1" max="5" onChange={this.handleChange}/>

                {/* update redux and route back,  while updating the redux store of current feeback values using history */}
                <button className="back" 
                    onClick={() => {this.setStore(); 
                        
                        this.props.history.push(this.props.direction.backward);}}> {/* pass previous userresponse backwards */}
                        Back</button>
                {/* update redux and route to next page, while updating the redux store of current feeback values using history    */}
                <button className="next" 
                    onClick={() => {this.setStore(); 
                        this.props.history.push(this.props.direction.forward);}}>
                            Next</button>
            </div>
        );
    }
}

// using withRouter gets access to the history object’s properties and closest routes available
// in this case helps traverse back and forth between Feeling, Undeerstanding, and Support while retaining data
export default connect()(withRouter(Feeling));