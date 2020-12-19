import React from "react";

export default class BtnVideo extends React.Component {
	handleClick = () => {
		alert("Событие есть, скоро появится действие");
	};
	render() {
		return (
			<button className="button" onClick={this.handleClick}>
				{this.props.btnVideo}
			</button>
		);
	}
}
