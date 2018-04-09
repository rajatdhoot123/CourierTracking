import React,{Component} from 'react';
import Modal from "./modal";
import { connect } from "react-redux";
import "./loginModal.scss";
import { firebaseLogin } from "../../Firebase/config";

class LoginModal extends Component {
    state ={
        isPassVisible: false,
        email: '',
        password: '',
        password2: ''
    }

    isPassVisible = () => {
        this.setState(prevState => ({isPassVisible: !prevState.isPassVisible}))
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        firebaseLogin(this.state.email,this.state.password)
    }
    render() {
        let { isOpen } = this.props
        return (
            <Modal show={isOpen} height={"450px"} width={"650px"}>
            <div className="loginModal">
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        {/* <input type="text" name="username" placeholder="Username" /> */}
                        <input type="email" name="email" onChange={this.handleInput} value={this.state.email} placeholder="E-mail" />
                        <input type="password" name="password" onChange={this.handleInput} readOnly={!this.state.email} placeholder="Password" />
                        <input type="password" name="password2" onChange={this.handleInput} readOnly={!this.state.password} placeholder="Retype password" />
                        <input type="submit" name="signup_submit" onClick={this.handleSubmit} value="Sign me up" />
                    </div>

                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>

                        <button className="social-signin email">Log in with email</button>
                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin twitter">Log in with Twitter</button>
                        <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
                </div>
                {/* <div className="mt-5">
                    <h4 className="text-center">Login</h4>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="w-100">
                            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                            <div className="input-group my-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="material-icons">email</i></div>
                                </div>
                                <input type="email" className="form-control" id="inlineFormInputGroup" placeholder="email" />
                            </div>
                            <label className="sr-only" htmlFor="inputPassword">Password</label>
                            <div className="input-group my-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="material-icons">lock</i></div>
                                </div>
                                <input type={this.state.isPassVisible ? "text" : "password"} className="form-control border-right-0" id="inputPassword" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text" 
                                    onClick={this.isPassVisible} 
                                    style={{ backgroundColor: "transparent", cursor: "pointer" }}>
                                    <i className="material-icons">remove_red_eye</i></div>
                                </div>
                            </div>
                            <button className="col-auto btn btn-primary btn-block btn-sm mt-4">Login</button>
                        </div>
                    </div>
                </div> */}
            </Modal>
        )
    }
}

const mapStateToProps = ({loginModal}) => loginModal;

export default connect(mapStateToProps)(LoginModal)