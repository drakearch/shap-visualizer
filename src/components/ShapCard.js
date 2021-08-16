import React, { Component } from 'react'

class ShapCard extends Component {

	constructor() {
		super();
	}

	loadShapForceVisualizer() {
		const s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.innerHTML = "if (window.SHAP) SHAP.ReactDom.render(SHAP.React.createElement(SHAP.AdditiveForceVisualizer, "+ JSON.stringify(this.props.explain) + "), document.getElementById('"+this.props.uuid+"'));";
		document.body.appendChild(s);
	}

	componentDidMount() {
		this.loadShapForceVisualizer()
	}

	componentDidUpdate() {
		this.loadShapForceVisualizer()
	}

	render() {
		return (
			<div className="card">
				<div className="card-content">
					<span className="card-title left-align">
						{(this.props.index+1).toString() + ". Predicted value: "}
						<strong>
							{(this.props.explain.outValue > this.props.explain.baseValue).toString()}
						</strong>
					</span>
					<div id={this.props.uuid}></div>
				</div>
			</div>
		)
	}
}

export default ShapCard