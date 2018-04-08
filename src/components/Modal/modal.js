import React,{ Component } from "react";
import './modal.css';
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { toggleModal } from "../../actions/modal";

class Modal extends Component {

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

    toggleModel = () => {
       this.props.toggleModal(!this.props.show)
    }

    render() {
        let { height, width, show } = this.props;
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


const mapStateToProps = ({loginModal}) => loginModal

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggleModal: toggleModal
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Modal)