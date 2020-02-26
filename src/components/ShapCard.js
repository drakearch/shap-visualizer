import React, { Component } from 'react'

class ShapCard extends Component {

	componentDidMount() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = "if (window.SHAP) SHAP.ReactDom.render(SHAP.React.createElement(SHAP.AdditiveForceVisualizer, "+ JSON.stringify(this.props.explain.shap_values) + "), document.getElementById('"+this.props.uuid+"'));";
		document.body.appendChild(s);
	}

	componentDidUpdate() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = "if (window.SHAP) SHAP.ReactDom.render(SHAP.React.createElement(SHAP.AdditiveForceVisualizer, "+ JSON.stringify(this.props.explain.shap_values) + "), document.getElementById('"+this.props.uuid+"'));";
		document.body.appendChild(s);
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<span className="card-title left-align">{ (this.props.index+1).toString() + ". Label prediction: " + this.props.explain.prediction }</span>
					<div id={this.props.uuid}></div>
				</div>
			</div>
		)
	}
}

export default ShapCard