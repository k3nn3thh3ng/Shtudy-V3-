import React from 'react';
import { connect } from 'react-redux';

import { removeQuestionCart } from '../actions/index';

function AddCartQuestion(props) {

	const handleClick = (event) => {
		props.removeQuestionCart(props.question_id)
	}
	
	return(
		<div>
			<button onClick={handleClick}> Remove Question </button>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {}
};
const mapDispatchToProps = { removeQuestionCart }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCartQuestion);