import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

//material ui imports
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button';


//redux form imports
import validate from './form/validate';

//axios action handler
import { createQuestion } from '../actions/index';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
)

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
		<FormControl error={touched && error}>
			<InputLabel htmlFor="level-simple">Level</InputLabel>
			<Select
				native
				{...input}
				{...custom}
				inputProps={{
					name: 'level',
					id: 'level-simple'
				}}
			>
				{children}
			</Select>
			{renderFromHelper({ touched, error })}
		</FormControl>
	)

const New = props => {
	const { handleSubmit, pristine, reset, submitting, classes } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field 
					name="question[title]"
					component={renderTextField}
					label="Enter Question Title"
				/>
			</div>

			<div>
				<Field 
					name="question[question]"
					component={renderTextField}
					label="Enter Question"
				/>				
			</div>
			
			<div>
				<Field 
					name="question[solution]"
					component={renderTextField}
					label="Enter Solution"
				/>				
			</div>
			

			<div>
				<Field 
					classes={classes}
					name="question[level]"
					component={renderSelectField}
					label="Question's Level"
				>
					<option value="" />
					<option value={6}>Primary 6</option>
					<option value={5}>Primary 5</option>
					<option value={4}>Primary 4</option>
				</Field>
			</div>		

			<div>
				<Field name="question[subject]" component={radioButton}>
					<Radio value="Math" label="Math" />
					<Radio value="Science" label="Science" />
				</Field>
			</div>
			
			<div>
				<Button variant="outlined" color="primary" type="submit" disabled={pristine || submitting}>
					Submit
				</Button>
				<Button variant="outlined" color="secondary" type="button" disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</Button>
			</div>
		</form>
	)
}

// class New extends React.Component{
// 	renderInput = (formProps) => {
// 		return(
// 			<RenderInput formProps={formProps} />
// 		)
// 	}
	
// 	onSubmit = (formValues) => {
// 		console.log(formValues);
// 		this.props.createQuestion(formValues);
// 	}
	
// 	render() {
// 		return(
// 			<Box>
// 				<h2>New Form</h2>
// 				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
// 					<Field 
// 						name="question[title]" 
// 						component={this.renderInput} 
// 						label="Enter Title"
// 					/>
// 					<Field 
// 						name="question[description]" 
// 						component={this.renderInput} 
// 						label="Enter Description"
// 					/>
// 										<Field 
// 						name="question[title]" 
// 						component={this.renderInput} 
// 						label="Enter Title"
// 					/>
// 					<Field 
// 						name="question[question]" 
// 						component={this.renderInput} 
// 						label="Enter Question"
// 					/>
// 					<Field 
// 						name="question[solution]" 
// 						component={this.renderInput} 
// 						label="Enter Solution"
// 					/>
// 					<Field 
// 						name="question[level]" 
// 						component={this.renderInput} 
// 						label="Question Set For Which Level?"
// 					/>
// 					<Field 
// 						name="question[subject]" 
// 						component={this.renderInput} 
// 						label="Subject"
// 					/>
// 					<button>Submit</button>
// 				</form>
// 			</Box>
// 		)
// 	}
// }


const formWrapped = reduxForm({
	form: 'questionCreate',
	validate
})(New);

const mapStateToProps = null;
const mapDispatchToProps = { createQuestion }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(formWrapped);


