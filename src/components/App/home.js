import React, { Component } from "react";
import Tracking from '../Tracking/tracking';
import Navbar from '../Navbar/navbar';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div><Navbar /></div>
            <div><Tracking /></div>
            </React.Fragment>
        )
    }
}

export default Home;