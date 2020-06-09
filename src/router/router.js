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
import Canvas from '../view/canvas/canvas'

// 组件
import HomeContent from '../components/homeContent/homeContent'
import GoodsInfo from '../components/goods/goodsInfo'
import Goodscategory from '../components/goods/goodscategory'
import Charts from '../components/graphical/charts'
import Line from '../components/graphical/line'
import Role from '../components/role/role'
import User from '../components/user/user'
import Order from '../components/order/order'
import AddUpdata from '../components/goods/addUpdata'
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
                <Route path='/home' render={(props)=>(
                    <HomeView {...props}>
                            <Switch >
                                <Route path='/home' exact component={HomeContent}></Route>
                                <Route path='/home/goodsinfo' exact component={GoodsInfo}></Route>
                                <Route path='/home/goodscategory' exact component={Goodscategory}></Route>
                                <Route path='/home/charts' exact component={Charts}></Route>
                                <Route path='/home/line' exact component={Line}></Route>
                                <Route path='/home/role' exact component={Role}></Route>
                                <Route path='/home/user' exact component={User}></Route>
                                <Route path='/home/order' exact component={Order}></Route>
                                <Route path='/home/goods/addupdata' exact component={AddUpdata}></Route>
                            </Switch>
                    </HomeView>
                )}>
                </Route>
                <Route component={LoginView} path='/login'>

                </Route>
                <Route component={Signup} path='/sign'>

                </Route>
                <Route component={Canvas} path='/canvas'>

                </Route>
            </Switch>
        </Router>
    )
}

export default router
