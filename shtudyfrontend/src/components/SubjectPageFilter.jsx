import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { filterQuestions } from '../actions/index';

class SubjectPageFilter extends React.Component{
	filterOption = (question) => 
		question.difficulty === 3
	

	componentDidMount() {

		this.props.filterQuestions(this.filterOption);
		console.log(this.props.questionsList)
	}
	
	helper = (questions) => (
		<ul>
			{questions.map(function(question) {
				return (
					<li key={question._id}>
						<h1>{question.title}</h1>
						<p>{question.question}</p>
					</li>
				)
			})}
		</ul>
	);
	
	render() {
		return(
			<div>
				<h1> Subject Page </h1>
				
				<Link to='/subjectpage'> Reset </Link>
				
				{this.helper(this.props.questionsList)}
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const { filterQuestions } = state;
	return { questionsList: filterQuestions}
};
const mapDispatchToProps = { filterQuestions }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubjectPageFilter);