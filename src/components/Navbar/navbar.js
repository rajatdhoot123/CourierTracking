import React,{ Component } from "react";
import { NavLink } from 'react-router-dom'
import './navbar.css';
import { firebaseLogin } from "../../Firebase/config";
import LoginModal from "../Modal/loginModal";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="fixed-top">
                    <div className="py-2">
                        <ul className="d-flex container my-auto">
                            <li className="mx-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mx-2"><NavLink to="/profile">Profile</NavLink></li>     
                            <li className="mx-2 ml-auto"><NavLink to="/about">Logout</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}