import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
// import Home from "../pages/home/home";
// import Login from "../pages/login/login";
// import Info from "../pages/home/info";
// import Order from "../pages/order/order";
// import Hooks from "../pages/hooks/hooks"
import HomeView from '../view/home/homeView'
import LoginView from '../view/login/loginView'
import Signup from '../view/signup/signup'
function router() {
    return (
    /* {       <Router >
                <Switch>
                    <Route path = '/' exact render = {()=>(
                        <Redirect to = '/home'></Redirect>
                    )}>
                    </Route>
                    <Route path = "/home"  render = {() =>(
                        <Home>
                            <Route path = '/home/info' component = {Info} />
                        </Home>
                    )}>
                    </Route>
                    <Route path = "/login" component = {Login}></Route>
                    <Route path = '/order/:userId' component = {Order}></Route>
                    <Route path = '/hooks' component = {Hooks}></Route>
                </Switch>
            </Router>}*/
        <Router>
            <Switch>
                <Route path = '/' exact render = {()=>(
                    <Redirect to = '/home'></Redirect>
                )}>
                </Route>
                <Route component={HomeView} path='/home'>

                </Route>
                <Route component={LoginView} path='/login'>

                </Route>
                <Route component={Signup} path='/sign'>

                </Route>
            </Switch>
        </Router>
    )
}

export default router
