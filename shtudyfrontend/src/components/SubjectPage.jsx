import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TablePagination } from '@material-ui/core';

import { showQuestions } from '../actions/index';

import AddCartQuestion from './AddCartQuestion';
import RemoveCartQuestion from './RemoveCartQuestion';

class SubjectPage extends React.Component{
	
	state = {
		page: 0,
		pageSize: 10
	}
	
	componentDidMount() {
		this.props.showQuestions();
		console.log(this.props.questionsList)
	}
	
	helper = (questions) => (
		<ul>
			{questions.map(function(question) {
				return (
					<li key={question._id}>
						<h1>{question.title}</h1>
						<p>{question.question}</p>
						<AddCartQuestion question_id={question._id} />
						<RemoveCartQuestion question_id={question._id} />
					</li>
				)
			})}
		</ul>
	);

	handleChangePage = (event, newPage) => {
		this.setState({page: newPage})
	};

	handlePageSize = (event) => {
		const newPageSize = parseInt(event.target.value, 10);
		this.setState({pageSize: newPageSize})
		this.setState({page: 0})
	};

	
	render() {
		return(
			<div>
				<h1> Subject Page </h1>
				
				<Link to='/cart'> ShoppingCart </Link>
				{this.helper(this.props.questionsList)}
				
				<TablePagination
					component="div"
					count={100}
					page={this.state.page}
					onChangePage={this.handleChangePage}
					rowsPerPage={this.state.pageSize}
					onChangeRowsPerPage={this.handlePageSize}
				/>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	const { showQuestions } = state;
	return { questionsList: showQuestions}
};
const mapDispatchToProps = { showQuestions }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubjectPage);