import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createQuestion } from '../actions/index';

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
		this.props.createQuestion(formValues);
	}
	
	render() {
		return(
			<div>
				<h2>User Creation</h2>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field 
						name="question[title]" 
						component={this.renderInput} 
						label="Enter Title"
					/>
					<Field 
						name="question[question]" 
						component={this.renderInput} 
						label="Enter Question"
					/>
					<Field 
						name="question[password]" 
						component={this.renderInput} 
						label="Enter Solution"
					/>
					<Field 
						name="question[difficulty]" 
						component={this.renderInput} 
						label="From 1 - 3"
					/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}


const formWrapped = reduxForm({
	form: 'questionCreate'
})(New);

const mapStateToProps = null;
const mapDispatchToProps = { createQuestion }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(formWrapped);


