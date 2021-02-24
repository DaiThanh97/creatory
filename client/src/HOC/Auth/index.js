import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userService } from '../../services/user.service';
import { ROUTE } from './../../configs/constants';

export default function Auth({ path, component: Component }) {
    return (
        <Route path={path} render={props => {
            const isSignIn = userService.getSignInState();
            if (isSignIn) {
                return <Component {...props} />
            }
            return <Redirect to={ROUTE.SIGN_IN} />
        }} />
    )
}