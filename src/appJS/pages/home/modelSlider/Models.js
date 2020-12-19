import React from "react";
import {Button} from "react-bootstrap";

// import BtnBuy from "../../../elem/button/Buy";
// import BtnPrice from "../../../elem/button/List";

export default class Models extends React.Component {
	render() {
		return (
			<div className="Models main">
				<div className="wrapper">
					<div className="title">Модели</div>
					<div className="wrapper-models">
						<div className="content">
							<div className="wrapper-image">
								<img className="image" src={this.props.recirculator} alt="Рециркулятор" />
							</div>
							<div className="wrapper-dots">
								<div className="wrapper-dot">
									<span className="dot" />
								</div>
								<div className="wrapper-dot">
									<span className="dot" />
								</div>
								<div className="wrapper-dot">
									<span className="dot" />
								</div>
								<div className="wrapper-dot">
									<span className="dot" />
								</div>
								<div className="wrapper-dot">
									<span className="dot" />
								</div>
							</div>
						</div>
						<div className="content">
							<h4>airwin </h4>
							<p className="p">AW-35</p>
							<div className="text">
								Разнообразный и богатый опыт сложившаяся структура организации позволяет оценить
								значение направлений прогрессивного развития! Таким образом, сложившаяся структура
								организации играет важную роль в формировании всесторонне сбалансированных
								нововведений!
							</div>
							<div className="wrapper-attr">
								<div className="strong">Мощность : {this.props.strong} Вт</div>
								<div className="action">
									Площадь действия: {this.props.action} м<sup>2</sup>
								</div>
								<div className="attr">Атрибут: {this.props.attr}</div>
							</div>
							<div className="wrapper-price">
								<div className="price">от {this.props.price} р</div>
							</div>
							<div className="wrapper-button">
								<Button variant="dark">{this.props.btnBuy}</Button>
								<Button variant="outline-dark">{this.props.btnList}</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
