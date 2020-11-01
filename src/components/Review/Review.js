import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



class Review extends Component {

    //function to post the submission to the database
    submitFeedback=()=>{
        console.log(this.props.reduxState.feedBackReducer);
        const feedback={
            feeling: this.props.reduxState.feedBackReducer[0],
            understanding: this.props.reduxState.feedBackReducer[1],
            support: this.props.reduxState.feedBackReducer[2],
            comments: this.props.reduxState.feedBackReducer[3]
        }
    
        axios({
            method: 'POST',
            url: '/feedback',
             data: feedback
          }).then((response) =>{
              console.log(response.data);
              // alert user that their feedback was submitted
              alert('Thanks for your feedback!')
              // clear feedback reducer and goto to home page
              this.props.dispatch({type:"CLEAR_FEEDBACK"});
              this.props.history.push('/');
              
          }).catch( error =>
            console.log('ERROR in POST', error)
          );
    }

  render() {
    return (
      <div className="review">
            <h1>Review your Feedback:</h1>
            <p>Feelings: {this.props.reduxState.feedBackReducer[0]}</p>
            <p>Understanding: {this.props.reduxState.feedBackReducer[1]}</p>
            <p>Support: {this.props.reduxState.feedBackReducer[2]}</p>
            <p>Comments: {this.props.reduxState.feedBackReducer[3]}</p>

            <button onClick={this.submitFeedback}>
            Submit</button>

            <button onClick={()=>this.props.history.push(
                                    this.props.direction.backward)}>
            Go Back</button>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>({
     reduxState
})

export default connect(mapReduxStateToProps)(withRouter(Review));