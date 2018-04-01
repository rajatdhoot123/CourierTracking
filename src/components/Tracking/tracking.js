import React, { Component, Fragment} from "react";
import Select from 'react-select';
import reactSelectStyles from 'react-select/dist/react-select.css'
import axios from "axios";
import "../../assets/common.css";

export default class Tracking extends Component {
    state = {
        selectedOption: '',
        trackingId:'',
        response: null,
        error: null,
        loading: false
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption, trackingId: '', response: null });
    }

    getTrackingDetails = (courier, trackingId) => {
        this.setState({loading: true})
        return axios.get(`https://desolate-retreat-95865.herokuapp.com/${courier}/${trackingId}`)
    }
    handleTrackingId = (e) => {
        this.setState({ trackingId: e.target.value },() => {
            switch (this.state.selectedOption.value) {
                case 'DelhiVery':
                (this.state.trackingId.length >= 13) &&
                    this.getTrackingDetails('delhiVery', this.state.trackingId)
                        .then((result) => this.setState({ response: result.data, loading: false }))
                        .catch((error) => this.setState({ error: error, loading: false }))
                    break;
                case 'Ecom':
                (this.state.trackingId.length == 9) &&
                    this.getTrackingDetails('ecom', this.state.trackingId)
                        .then((result) => this.setState({ response: result.data, loading: false }))
                        .catch((error) => this.setState({ error: error, loading: false }))
                    break;
                case 'Bluedart':
                (this.state.trackingId.length == 11) &&
                    this.getTrackingDetails('bluedart', this.state.trackingId)
                        .then((result) => this.setState({ response: result.data, loading: false }))
                        .catch((error) => this.setState({ error: error, loading: false }))
                    break;
                case 'Ekart':
                (this.state.trackingId.length == 14) &&
                    this.getTrackingDetails('ekart', this.state.trackingId)
                    .then((result) => this.setState({response: result.data, loading: false }))
                    .catch((error) => this.setState({error: error, loading: false }))
                    break;
                case 'XpressBees':
                (this.state.trackingId.length == 14) &&
                    this.getTrackingDetails('xpressBees', this.state.trackingId)
                    .then((result) => this.setState({ response: result.data, loading: false }))
                    .catch((error) => this.setState({ error: error, loading: false }))
                    break;
                default:
                    break;
            }
        });
    }

    render() {
        let courierProvider = [
            { value: 'DelhiVery', label: 'Delhivery' },
            { value: 'Ekart', label: 'Ekart' },
            { value: 'Bluedart', label: 'Bluedart' },
            { value: 'Ecom', label: 'Ecom' },
            { value: 'XpressBees', label: 'Xpressbees' },
        ]
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        let { response, error, loading } = this.state
        return (
            <div className="tracking d-flex align-items-center" style={{ minHeight: "500px" }}>
            <div className="card mx-auto" style={{width: "60%"}}>
            <div className="card-body d-flex">
                <div className="w-25 mx-2">
                    <Select
                        name="form-field-name"
                        value={value}
                        onChange={this.handleChange}
                        options={courierProvider}
                    />
                </div>
                <div className="form-group mx-2">
                    <input type="text"
                    className="form-control" 
                    id="trackingNo" value={this.state.trackingId} 
                    onChange={this.handleTrackingId} 
                    placeholder="Tracking Id" 
                    readOnly={!this.state.selectedOption || !!loading}/>
                </div>
                <div className="form-group mx-2">
                    <div className="form-control d-flex" id="status" style={{minWidth: "230px"}}>
                                <span>{(!!loading) ? 'Loading' : (!response) ? 'status' : Array.isArray(response.result) ? response.result[0].detail : response.result}</span>
                        {(!!loading) &&
                            <div className="sp sp-3balls"></div>
                        }
                    </div>
                    {(!!error) &&
                        <small className="form-text" style={{color: "red"}}>Something went wrong try again.</small>
                    }
                </div>
                </div>
                </div>
            </div>
        );
    }
}