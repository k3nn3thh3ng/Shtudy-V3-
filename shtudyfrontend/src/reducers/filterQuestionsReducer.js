export default function 
filterQuestionsReducer(allQuestions = [], action) {
    if (action.type === 'FILTER_QUESTIONS') {
        return action.payload
    } 
	return allQuestions
};
