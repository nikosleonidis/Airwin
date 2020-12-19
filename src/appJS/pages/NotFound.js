import React from "react";
// const style = {"animation-delay": 0.5 + index / 10 + "s"};
// 					return (
// 						<span aria-hidden="true" key={index} style={style}>
// 							{char}
// 						</span>
// 					);
export default class NotFound extends React.Component {
	isFound =
		window.location.pathname.includes("/home") || window.location.pathname.includes("/catalog");
	isStyle = this.isFound ? {display: "none"} : {display: "flex"};
	render() {
		return (
			<div className="wrapper-text" style={this.isStyle}>
				<div className="text">Страница не найдена</div>
			</div>
		);
	}
}
