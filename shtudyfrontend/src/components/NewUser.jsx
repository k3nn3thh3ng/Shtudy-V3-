import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createUser } from '../actions/index';

class New extends React.Component{
	renderInput = (formProps) => {
		return(
			<div>
				<label>{formProps.label}</label>
				<input {...formProps.input}/>
			</div>
		)
	}
	
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.createUser(formValues);
	}
	
	render() {
		return(
			<div>
				<h2>User Creation</h2>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field 
						name="user[email]" 
						component={this.renderInput} 
						label="Enter Email"
					/>
					<Field 
						name="user[username]" 
						component={this.renderInput} 
						label="Enter Username"
					/>
					<Field 
						name="user[password]" 
						component={this.renderInput} 
						label="Enter Password"
					/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}


const formWrapped = reduxForm({
	form: 'userCreate'
})(New);

const mapStateToProps = null;
const mapDispatchToProps = { createUser }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(formWrapped);


