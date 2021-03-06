import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './form';
import { signUp } from '../../../actions'

class SignUp extends Component {
    handleSignUp = values => {
        console.log('Sign Up Submitted with:', values)

        this.props.signUp(values);
    }
    render() { 
        return ( 
            <div>
                <h1 className="center">Sign Up</h1>
                <Form onSubmit={this.handleSignUp}/>
            </div>
        );
    }
}

export default connect(null, { signUp })(SignUp);
