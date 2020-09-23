import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import { authLogin, authCheck } from '../actions/index';

class Login extends React.Component{
	state = { redirect: null };

	renderInput = (formProps) => {
		return(
			<div>
				<label>{formProps.label}</label>
				<input {...formProps.input}/>
			</div>
		)
	}
	
	onSubmit = async (formValues) => {
		console.log(formValues);
		await this.props.authLogin(formValues);
		this.setState({ redirect: '/'})
	}
	
	_handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    	window.open("https://testingexpressandreact.run.goorm.io/auth/google", "_self");
  	};
	
	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		} return (
			<div>
				<h2>User Login</h2>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field 
						name="username" 
						component={this.renderInput} 
						label="Enter Username"
					/>
					<Field 
						name="password" 
						component={this.renderInput} 
						label="Enter Password"
					/>
					<button>Submit</button>
				</form>
				<button type="button" onClick={this._handleSignInClick}>Google Sign In</button>
				<a href="https://testingexpressandreact.run.goorm.io/logout">Logout</a>
			</div>
		)
	}
}


const formWrapped = reduxForm({
	form: 'authLogin'
})(Login);

const mapStateToProps = null;
const mapDispatchToProps = { authLogin, authCheck }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(formWrapped);