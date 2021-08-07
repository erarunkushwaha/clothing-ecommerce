import React, { Component } from 'react';
import './sign-up.styles.scss';
import { FromInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
export default class SignUp extends Component {

    constructor(){
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

         await createUserProfileDocument(user, {displayName});

        } catch (error) {
            console.log(error);
        }

    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign Up With Your email and password</span>
                <form  className="sign-up-form" onSubmit={this.handleSubmit} >
                    <FromInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required />

                    <FromInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />

                    <FromInput type="password" name="password" value={password} onChange={this.handleChange} label="password" required />

                    <FromInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="confirm Password" required />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}



