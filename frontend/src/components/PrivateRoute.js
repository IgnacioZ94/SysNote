import React from 'react';
import {Route , Redirect} from 'react-router-dom';

export const PrivateRoute = ({ component: Component, auth = true, ...rest }) => (
    <Route {...rest} render={props => (
        auth
            ? <Component {...props} />
            : <Redirect to="/login" />
    )
    } />
)

//function PrivateRoute ({ component: Component, auth = true, ...rest }) {
//    return (
//        <Route {...rest} render={(props) => auth === true
//                ? <Component {...props} />
//                : <Redirect to="/login" />}
//        />
//    )
//    
//}
//
//export default PrivateRoute();


