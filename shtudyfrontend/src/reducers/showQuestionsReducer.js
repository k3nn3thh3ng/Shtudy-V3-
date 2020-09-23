export default function 
showQuestionsReducer(allQuestions = [], action) {
    if (action.type === 'SHOW_QUESTIONS') {
        return action.payload
    } 
	return allQuestions
};

