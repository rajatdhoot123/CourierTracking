import React, { Component } from "react";
import Tracking from '../Tracking/tracking';
import Navbar from '../Navbar/navbar';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div><Navbar /></div>
            <div><Tracking /></div>
            </React.Fragment>
        )
    }
}