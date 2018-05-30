import React,{ Component } from "react";
import { Route, Redirect } from 'react-router-dom'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // fake async
    }
}



export const ProtectedRoutes = ({ component: Component, ...rest }) => {
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated ? 
        <Component {...props} />
        :
        <Redirect to="/login" />
    )} />
}