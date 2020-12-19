import React from "react";

export default class Catalog extends React.Component {
	render() {
		return (
			<div className="Catalog">
				<div className="wrapper">
					<p className="">
						<i className="fas fa-users-class">Здесь скоро появиться каталог</i>
					</p>
					<div className="spinner-border" role="status"></div>
					<span className="visually-hidden">{this.props.load}...</span>
				</div>
			</div>
		);
	}
}
