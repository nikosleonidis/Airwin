import React from "react";

export default class Principle extends React.Component {
	render() {
		return (
			<div className="Principle main">
				<div className="wrapper">
					<div className="wrapper-image">
						<img className="image" src={this.props.principleImage} alt="" />
					</div>
					{this.props.principleText}
				</div>
			</div>
		);
	}
}
