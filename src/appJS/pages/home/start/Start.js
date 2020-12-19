import React from "react";
import {Button} from "react-bootstrap";

// import BtnBuy from "../../../elem/button/Buy";
// import BtnVideo from "../../../elem/button/Video";

export default class Start extends React.Component {
	render() {
		return (
			<div className="Start main">
				<div className="wrapper">
					<div className="wrapper-image">
						<img className="image" src={this.props.recirculator} alt="Рециркулятор" />
					</div>
					<div className="wrapper-text">
						<div className="title">
							<h3>Абсолютная защита</h3>
						</div>
						<div className="title">
							<h1>Airwin</h1>
						</div>
						<div className="text">
							<p className="p">Бактерицидные рециркуляторы для обеззараживания воздуха</p>
							<p className="p">
								Рециркуляторы воздуха уничтожают 99,9% бактерий и вирусов, в том числе COVID-19.
								Работают быстро и бесшумно. 20 минут достаточно , чтобы началось очищение возздуха.
							</p>
						</div>
						<div className="wrapper-button">
							<Button variant="dark">{this.props.btnBuy}</Button>
							<Button variant="outline-dark">{this.props.btnVideo}</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
