import React,{Component} from 'react';
import Modal from "./modal";

export default class LoginModal extends Component {
    state ={
        isPassVisible: false
    }

    isPassVisible = () => {
        this.setState(prevState => ({isPassVisible: !prevState.isPassVisible}))
    }
    render() {
        return (
            <Modal show={true} height={"450px"} width={"400px"}>
                <div className="mt-5">
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
                </div>
            </Modal>
        )
    }
}