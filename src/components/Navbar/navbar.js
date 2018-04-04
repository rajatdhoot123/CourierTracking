import React,{ Component } from "react";
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="py-2">
                    <ul className="d-flex container my-auto">
                        <li className="mx-2">Home</li>
                        <li className="mx-2">Profile</li>
                        <li className="mx-2 ml-auto">Logout</li>
                    </ul>
                </div>
            </nav>
        )
    }
}