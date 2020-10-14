import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth , provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

    const[ state , dispatch ] = useStateValue();
    const signIn = () => {
        //sign in fx
        auth.signInWithPopup( provider )
            .then( result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch( err => alert( err.message ))
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="fb-logo"></img>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button type="submit" onClick={ signIn }>
                Sign In
            </Button>
        </div>
    )
}

export default Login
