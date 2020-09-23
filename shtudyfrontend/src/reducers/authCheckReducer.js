export default function authCheckReducer(isAuth = false, action) {
    if (action.type === 'AUTHENTICATE_CHECK') {
        return action.payload.success
    } return isAuth
};