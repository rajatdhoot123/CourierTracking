import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Home } from "./components";
import LoginModal from "../src/components/Modal/loginModal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={LoginModal} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))

