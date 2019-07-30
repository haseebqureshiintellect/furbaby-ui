import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './home';
import About from './about';
import ContactUs from './contactUs';
import UserSignup from './userSignup';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={About}/>?
                <Route path={"/about"} component={Home}/>
                <Route path={"/login"} component={ContactUs}/>
                <Route path={"/signup"} component={Home}/>

                {/* <Route path={"/"} exact component={About}/>?
                <Route path={"/signup"} component={}/>
                <Route path={"/login"} component={ContactUs}/> */}
                {/* <Route path={"/user-signup"} component={UserSignup}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
