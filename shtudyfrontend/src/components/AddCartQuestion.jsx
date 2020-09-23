import React from 'react';
import { connect } from 'react-redux';

import { addQuestionCart } from '../actions/index';

function AddCartQuestion(props) {

	const handleClick = (event) => {
		props.addQuestionCart(props.question_id)
	}
	
	return(
		<div>
			<button onClick={handleClick}> Add Question </button>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {}
};
const mapDispatchToProps = { addQuestionCart }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCartQuestion);