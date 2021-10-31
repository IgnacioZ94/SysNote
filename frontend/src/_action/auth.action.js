import { userConstants } from "../_constants";
import { authService } from "../services/auth.service";
import history from "../_helpers/history";

export const authActions = {
    login
}

function login(user) {
    return async dispatch => {
        //console.log(user);
        dispatch(request());

        authService.login(user)
            .then(response => {
                if(response.auth){
                    dispatch(success(response))
                    history.push('/')
                }
                else {
                    dispatch(failure(response))
                }
                
            })
            .catch(error  => {
                dispatch(failure(error))
            })
        
    }

    function request() { return { type: userConstants.USERLOGINREQUEST} }
    function success(user) { return { type: userConstants.USERLOGINSUCCESS , user} }
    function failure(err) { return { type: userConstants.USERLOGINFAILURE , err} }

}