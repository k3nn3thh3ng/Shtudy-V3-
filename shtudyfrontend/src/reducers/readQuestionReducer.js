export default function showQuestionsReducer(question = [], action) {
    if (action.type === 'READ_QUESTION') {
        return action.payload
    } return question
};