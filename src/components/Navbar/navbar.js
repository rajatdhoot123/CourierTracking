import React,{ Component } from "react";
import { NavLink } from 'react-router-dom'
import './navbar.css';
import LoginModal from "../Modal/loginModal";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 
import { toggleModal } from "../../actions/modal";

class Navbar extends Component {

    handleLoginModal = () => {
        this.props.toggleModal(true);
    }

    render() {
        return (
            <React.Fragment>
                <LoginModal show={true}/>
                <nav className="fixed-top">
                    <div className="py-2">
                        <ul className="d-flex container my-auto">
                            <li className="mx-2"><NavLink to="/">Home</NavLink></li>
                            <li className="mx-2"><NavLink to="/profile">Profile</NavLink></li>     
                            <li className="mx-2"><NavLink to="/orders">Orders</NavLink></li>     
                            <li className="mx-2 ml-auto" onClick={this.handleLoginModal}><a href="#0" >Login</a></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggleModal: toggleModal
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navbar)