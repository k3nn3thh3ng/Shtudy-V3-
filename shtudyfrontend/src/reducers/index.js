import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import showQuestionsReducer from './showQuestionsReducer';
import readQuestionReducer from './readQuestionReducer';
import authUserReducer from './authUserReducer';
import authCheckReducer from './authCheckReducer';
import readUserReducer from './readUserReducer';
import questionCartReducer from './questionCartReducer';
import filterQuestionsReducer from './filterQuestionsReducer';


export default combineReducers({
	filterQuestions: filterQuestionsReducer,
    showQuestions: showQuestionsReducer,
	readQuestion: readQuestionReducer,
	authUser: authUserReducer,
	authCheck: authCheckReducer,
	readUser: readUserReducer,
	form: formReducer,
	questionCart: questionCartReducer
})