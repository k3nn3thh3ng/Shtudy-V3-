export default function readUserReducer(userFullInfo = [], action) {
    if (action.type === 'READ_USER') {
        return action.payload
    } return userFullInfo
};