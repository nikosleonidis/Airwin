import React from "react";

import img from "../../../../assets/images/home/section7.png";
import recirculator from "../../../../assets/images/home/recirculator-brown.png";
export default class Manufact extends React.Component {
	render() {
		return (
			<div className="Manufact main">
				<div className="wrapper">
					<div className="title">Почему рециркуляторы нужно заказывать именно у производителя?</div>
					<div className="wrapper-image">
						<img className="image" src={img} alt="Схема" />
						<img className="image" src={recirculator} alt="Рециркулятор" />
					</div>
					<div className="wrapper-text">
						<p className="text">Какой-то текст</p>
						<p className="text">Какой-то текст</p>
						<p className="text">Какой-то текст</p>
						<p className="text">Какой-то текст</p>
						<p className="text">Какой-то текст</p>
						<p className="text">Какой-то текст</p>
					</div>
				</div>
			</div>
		);
	}
}
