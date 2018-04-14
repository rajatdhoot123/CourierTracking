import React,{Component} from 'react';
import Modal from "./modal";
import { connect } from "react-redux";
import "./loginModal.scss";
import { firebaseLogin } from "../../Firebase/config";
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
        password2: ''
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
                    (validateEmail(email) ? this.setState(prevState => ({ ...prevState, isValid: { ...prevState.isValid, isEmailValid: true }}),() => console.log(this.state,"second")) : this.setState(prevState => (({ ...prevState, isValid: { ...prevState.isValid, isEmailValid: false } })), () => console.log(this.state, "first")))
                    break;
                case "password":
                    (validatePassword(password) ? this.setState(prevState => ({ ...prevState, isValid: { ...prevState.isValid, isPasswordValid: true } }), () => console.log(this.state, "second")) : this.setState(prevState => (({ ...prevState, isValid: { ...prevState.isValid, isPasswordValid: false }, password2: '' })), () => console.log(this.state, "first")))
                break;
                case "password2":
                    (this.state.password == this.state.password2) ? this.setState(prevState => ({ ...prevState, isValid: { ...prevState.isValid, isPassword2Valid: true } }), () => console.log(this.state, "second")) : this.setState(prevState => (({ ...prevState, isValid: { ...prevState.isValid, isPassword2Valid: false } })), () => console.log(this.state, "first"))
                default:
                    break;
            }
        })
    }

    handleSubmit = () => {
        console.log(this.state,'this')
        //firebaseLogin(this.state.email,this.state.password)
    }

    render() {
        let { isOpen } = this.props
        let { email, password, password2, isValid } = this.state
        return (
            <Modal show={isOpen} height={"450px"} width={"650px"}>
            <div className="loginModal">
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        {/* <input type="text" name="username" placeholder="Username" /> */}
                        <input type="email" name="email" onChange={this.handleInput} value={email} placeholder="E-mail" />
                            <input type="password" name="password" onChange={this.handleInput} readOnly={!isValid.isEmailValid} value={password} placeholder="Password" />
                            <input type="password" name="password2" onChange={this.handleInput} readOnly={!isValid.isPasswordValid} value={password2} placeholder="Retype password" />
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
            </Modal>
        )
    }
}

const mapStateToProps = ({loginModal}) => loginModal;

export default connect(mapStateToProps)(LoginModal)