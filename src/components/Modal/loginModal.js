import React,{Component} from 'react';
import Modal from "./modal";
import { connect } from "react-redux";
import "./loginModal.scss";
import { firebaseLogin, firebaseSignup, googleLogin } from "../../Firebase/config";
import { validateEmail, validatePassword } from "../utils/validation";

class LoginModal extends Component {
    state ={
        isPassVisible: false,
        email: '',
        isValid: {
            isEmailValid: false,
            isPasswordValid: false,
            isPassword2Valid: false,
        },
        password: '',
        password2: '',
        mode: 'Sign up'
    }

    isPassVisible = () => {
        this.setState(prevState => ({isPassVisible: !prevState.isPassVisible}))
    }

    handleInput = (e) => {
        let { email, password, password2, isValid } = this.state
        let type = e.target.name;
        this.setState({ [e.target.name]: e.target.value }, () => {
            switch (type){ 
                case "email":
                    (validateEmail(email) ? this.setState(prevState => ({ ...prevState, isValid: { ...prevState.isValid, isEmailValid: true }})) : this.setState(prevState => (({ ...prevState, isValid: { ...prevState.isValid, isEmailValid: false } }))))
                    break;
                case "password":
                    (validatePassword(password) ? this.setState(prevState => ({ ...prevState, isValid: { ...prevState.isValid, isPasswordValid: true } })) : this.setState(prevState => (({ ...prevState, isValid: { ...prevState.isValid, isPasswordValid: false }, password2: '' }))))
                break;
                case "password2":
                    (this.state.password == this.state.password2) ? this.setState(prevState => ({ ...prevState, isValid: { ...prevState.isValid, isPassword2Valid: true } })) : this.setState(prevState => (({ ...prevState, isValid: { ...prevState.isValid, isPassword2Valid: false } })))
                default:
                    break;
            }
        })
    }

    handleMode = () => {
        this.setState({
            mode: "Login"
        })
    }

    handleSubmit = () => {
        let {mode , email, password, isValid: {isEmailValid, isPassword2Valid, isPasswordValid }} = this.state;
        switch (mode) {
            case 'Sign up':
                (isEmailValid && isPassword2Valid && isPasswordValid) ?
                    firebaseSignup(email, password)
                    :
                    alert('something might wrong')  
                break;
            case 'Login':
                firebaseLogin(email, password)
                break;
            default:
                break;
        }
    }

    render() {
        let { isOpen } = this.props
        let { email, password, password2, isValid, mode } = this.state
        return (
            <Modal show={isOpen || true} height={"450px"} width={"650px"}>
            <div className="loginModal">
                <div id="login-box">
                    <div className="left">
                        <h1>{mode}</h1>
                        {/* <input type="text" name="username" placeholder="Username" /> */}
                        <input type="email" name="email" onChange={this.handleInput} value={email} placeholder="E-mail" />
                            <input type="password" name="password" onChange={this.handleInput} readOnly={!isValid.isEmailValid} value={password} placeholder="Password" />
                        {(mode === 'Sign up') &&
                            <input type="password" name="password2" onChange={this.handleInput} readOnly={!isValid.isPasswordValid} value={password2} placeholder="Retype password" />
                        }
                        <input type="submit" name="signup_submit" onClick={this.handleSubmit} value={mode} />
                    </div>
                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>
                    {mode === 'Sign up' &&
                        <button className="social-signin email" onClick={this.handleMode}>Log in with email</button>
                    }
                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin twitter">Log in with Twitter</button>
                        <button className="social-signin google" onClick={googleLogin}>Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({loginModal}) => loginModal;

export default connect(mapStateToProps)(LoginModal)