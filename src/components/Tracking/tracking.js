import React, { Component, Fragment} from "react";
import Select from 'react-select';
import reactSelectStyles from 'react-select/dist/react-select.css'
import axios from "axios";

const getTrackingDetails = (courier, trackingId) => {
    return axios.get(`https://desolate-retreat-95865.herokuapp.com/${courier}/${trackingId}`)
}


export default class Tracking extends Component {
    state = {
        selectedOption: '',
        trackingId:'',
        response: null
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    handleTrackingId = (e) => {
        this.setState({ trackingId: e.target.value },() => {
            switch (this.state.selectedOption.value) {
                case 'DelhiVery':
                (this.state.trackingId.length == 13) &&
                    getTrackingDetails('delhiVery', this.state.trackingId)
                        .then((result) => this.setState({ response: result.data }))
                        .catch((error) => this.setState({ response: error }))
                    break;
                case 'Ecom':
                (this.state.trackingId.length == 9) &&
                    getTrackingDetails('ecom', this.state.trackingId)
                        .then((result) => this.setState({ response: result.data }))
                        .catch((error) => this.setState({ response: error }))
                    break;
                case 'Bluedart':
                (this.state.trackingId.length == 11) &&
                    getTrackingDetails('bluedart', this.state.trackingId)
                        .then((result) => this.setState({ response: result.data }))
                        .catch((error) => this.setState({ response: error }))
                    break;
                case 'Ekart':
                (this.state.trackingId.length == 14) &&
                    getTrackingDetails('ekart', this.state.trackingId)
                    .then((result) => this.setState({response: result.data}))
                    .catch((error) => this.setState({response: error}))
                    break;
                case 'XpressBees':
                (this.state.trackingId.length == 14) &&
                    getTrackingDetails('xpressBees', this.state.trackingId)
                    .then((result) => this.setState({ response: result.data }))
                    .catch((error) => this.setState({ response: error }))
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
        return (
            <div className="container d-flex justify-content-center align-self-center">
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
                    readOnly={!this.state.selectedOption}/>
                </div>
                <div className="form-group mx-2">
                    <input type="text" className="form-control" id="status" value={(!this.state.response) ? '' : this.state.response.result[0].detail} placeholder="status" readOnly />
                </div>
            </div>
        );
    }
}