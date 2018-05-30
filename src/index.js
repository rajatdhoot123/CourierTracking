import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Home, Orders, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ProtectedRoutes } from "./routes/routes";
import { store } from "../src/store";

let Protected = () => <span>In Protected </span>;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Home} />
              <Route exact path="/orders" component={Orders} />
              <ProtectedRoutes path="/about" component={Protected} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
