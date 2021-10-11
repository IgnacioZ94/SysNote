export const authActions = {
    login
}

function login(user) {
    return async dispatch => {
        console.log(user);
    }
}