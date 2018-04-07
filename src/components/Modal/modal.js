import React,{ Component } from "react";
import './modal.css';
import PropTypes from "prop-types";
import classnames from "classnames";

export default class Modal extends Component {

    state = {
        show: false
    }

    static propTypes = {
        show: PropTypes.bool,
        height: PropTypes.string,
        width: PropTypes.string
    }

    static defaultProps = {
        show: false,
        height: "450px",
        width: "600px"
    }

    componentDidMount() {
        this.setState({show: this.props.show})
    }
    
    toggleModel = () => {
        this.setState(prevState =>({ show: !prevState.show}))
    }

    render() {
        let { show } = this.state
        let { height, width } = this.props;
        return(
            <React.Fragment>
            <div className={classnames("c-modal",{'d-none': !show})} style={{height: height, width: width}}>
                <div className="modal-guts">
                    {this.props.children}
                </div>
            </div>
                <div className={classnames("modal-overlay", { 'd-none': !show })} id="modal-overlay" onClick={this.toggleModel}/>
            </React.Fragment>
        )
    }
}