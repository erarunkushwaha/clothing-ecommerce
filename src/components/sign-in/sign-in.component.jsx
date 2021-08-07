import React, { Component } from 'react'
import { CustomButton } from '../custom-button/custom-button.component';
import { FromInput } from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
   
    render() {
        return (
            <div className="sign-in" >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FromInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                  
                    <FromInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required />

                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
