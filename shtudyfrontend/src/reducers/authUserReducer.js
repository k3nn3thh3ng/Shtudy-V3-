export default function authUserReducer(authUser = "", action) {
    if (action.type === 'AUTHENTICATE_CHECK') {
        return action.payload.user.username
    } return authUser
};