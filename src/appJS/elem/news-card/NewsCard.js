import React from "react";

import arrow from "../../../assets/images/icons/arrow.png";

export default class NewsCard extends React.Component {
	handleClick = () => {
		alert("Событие есть, скоро появится действие");
	};

	render() {
		return (
			<div className="wrapper-card">
				<div className="wrapper-image">
					<img className="image" src={this.props.newCard.newsImage} alt="Новости" />
				</div>
				<div className="wrapper-text">
					<div className="title"> {this.props.newCard.title}</div>
					<div className="text">{this.props.newCard.text}</div>
					<div className="wrapper-button">
						<button className="button" onClick={this.handleClick}>
							ЧИТАТЬ ДАЛЕЕ <img src={arrow} alt="Иконка" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}
