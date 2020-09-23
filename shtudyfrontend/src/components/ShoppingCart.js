import React from 'react';
import { connect } from 'react-redux';

import RemoveCartQuestion from './RemoveCartQuestion';

class ShoppingCart extends React.Component{
	
	helper = (questions) => (
		<ul>
			{questions.map(function(question) {
				return (
					<li key={question._id}>
						<h1>{question.title}</h1>
						<p>{question.question}</p>
						<RemoveCartQuestion question_id={question._id} />
					</li>
				)
			})}
		</ul>
	)
	
	render() {
		return(
			<div>
				<h2>Shopping Cart Component</h2>
				{this.helper(this.props.questionCart)}
			</div>
		)
	}
}



const mapStateToProps = (state) => {
	const { questionCart } = state;
	return { questionCart: questionCart }
};
const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingCart);