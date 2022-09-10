import { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { PrivateRoutes } from '.'
import { Home } from '../pages/home'
import { Login } from '../pages/login'

export const AppRoutes = () => {
    return (
        <Fragment>
            <Route path="/">
                <Login />
            </Route>
            <Route path="/home">
                <PrivateRoutes />
                <Route path="/home">
                    <Home />
                </Route>
            </Route>
        </Fragment>
    )
}