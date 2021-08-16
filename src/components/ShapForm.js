import React, { Component } from 'react';
import store from '../store'

class ShapForm extends Component {
    constructor() {
        super();

        this.state = {
            json_response: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearState = this.clearState.bind(this);

        store.subscribe(() => {
            if (store.getState().json_response) {
                this.setState({
                    json_response: store.getState().json_response
                })
            }
            else {
                this.clearState();
            }
        });
    }

    componentDidMount() {
        // M.AutoInit();
    }

    clearState() {
        window.location.replace('');   
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onParseJsonResponse(this.state.json_response);
    }

    render() {
        return(
            <div className="card">
                <div className="card-content">
                    <span className="card-title">JSON Response</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <input id="json_response" type="text" className="validate"
                                    name="json_response"
                                    value={this.state.json_response}
                                    onChange={this.handleChange}
                                ></input>
                                <label htmlFor="icon_prefix">Paste your JSON Response here!</label>
                            </div>
                        </div>
                        <div className="center-align">
                            <button onClick={this.clearState} className="btn-floating red darken-2" style={{margin: '0 5px'}}>
                                <i className="material-icons">clear</i>
                            </button>
                            <button type="submit" className="btn-floating blue darken-2" style={{margin: '0 5px'}}>
                                <i className="material-icons">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ShapForm;