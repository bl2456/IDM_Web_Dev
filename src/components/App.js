import React, { Component } from "react";
import NavBar from "./Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../css/App.css';

import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import IDMWebDevMain from "./pages/IDMWebDevPage.jsx";
import Week2 from './pages/IDMWeeks/Week2/Week2.jsx';
import Week3 from './pages/IDMWeeks/Week3/Week3.jsx';

class App extends Component{
    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path='/' component={HomePage} exact />
                        <Route path='/IDM' component={IDMWebDevMain} exact />
                        <Route path='/IDMWeek2' component={Week2} exact />
                        <Route path='/IDMWeek3' component={Week3} exact />
                        <Route path='/NotFound' component={NotFoundPage} exact/>
                        <Redirect to='/NotFound' />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App;