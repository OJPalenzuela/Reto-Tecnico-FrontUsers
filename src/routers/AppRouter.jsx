import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'
import { findUsers } from '../redux/actions/usersActions'
import Main from '../views/Main'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppRouter = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        
    dispatch(findUsers())
    }, [dispatch])
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter
