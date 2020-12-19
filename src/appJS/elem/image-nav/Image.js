import React from "react";

export default class Image extends React.Component {
	render() {
		return (
			<div className="wrapper-image">
				<img src={this.props.image} className="image" alt="Иконки из информацинного блока" />
				<div className="text">{this.props.info}</div>
			</div>
		);
	}
}
