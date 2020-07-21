import React, { Component } from 'react'

import store from '../store';

class ShapCard extends Component {

	constructor() {
		super();
		this.state = {
			amounts: [],
			descriptions: []
		};

		store.subscribe(() => {
			this.setState({
				amounts: store.getState().amounts,
        		descriptions: store.getState().descriptions
			})
		})
	}

	componentDidMount() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = "if (window.SHAP) SHAP.ReactDom.render(SHAP.React.createElement(SHAP.AdditiveForceVisualizer, "+ JSON.stringify(this.props.explain) + "), document.getElementById('"+this.props.uuid+"'));";
		document.body.appendChild(s);
	}

	componentDidUpdate() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = "if (window.SHAP) SHAP.ReactDom.render(SHAP.React.createElement(SHAP.AdditiveForceVisualizer, "+ JSON.stringify(this.props.explain) + "), document.getElementById('"+this.props.uuid+"'));";
		document.body.appendChild(s);
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<span className="card-title left-align">{ (this.props.index+1).toString() 
								+ ". Predicted amount: " + this.props.explain.predicted_amount.toFixed(2) 
								+ " USD (" + this.props.explain.predicted_profit_ratio.toFixed(2) 
								+ "), Principal amount: " + this.props.explain.principal_amount.toFixed(2) 
								+ " USD, Predicted installments: " + this.props.explain.predicted_percentage_installments.toFixed(2) 
								+ " (" + this.props.explain.predicted_installments.toFixed(0) 
								+ " out of " + this.props.explain.number_of_installments + ")" }</span>
					<div id={this.props.uuid}></div>
				</div>
			</div>
		)
	}
}

export default ShapCard