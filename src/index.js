import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Home } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ProtectedRoutes } from "./routes/routes";
import { store } from '../src/store';

let Protected = () => <span>In Protected </span>

class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Home} />
                        <ProtectedRoutes path='/about' component={Protected} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))

