import React from "react";
import {Button} from "react-bootstrap";

// import BtnForm from "../../../elem/button/Form";

export default class Required extends React.Component {
	render() {
		return (
			<div className="Required main">
				<div className="wrapper-req">
					<div className="wrapper-image">
						<img className="image" src={this.props.reqImageTop} alt="Изображение" />
					</div>
					<div className="wrapper-form-image">
						<div className="wrapper-form">
							<div className="req-form">
								<div className="title">Требуется консультация?</div>
								<div className="text-form">
									У вас остались вопросы или хотите сделать заказ? Позвоните нам или заполните форму
									ниже, и наш менеджер свяжется с вами!
								</div>
								<form className="form">
									<div className="wrapper-place">
										<input placeholder="Имя" />
									</div>
									<div className="wrapper-place">
										<input placeholder="Фамилия" />
									</div>
									<div className="wrapper-place">
										<input placeholder="E-mail" />
									</div>
								</form>
								<div className="wrapper-button">
									<Button variant="dark">{this.props.btnForm}</Button>
								</div>
							</div>
						</div>
						<div className="wrapper-image">
							<img className="image" src={this.props.reqImageLeft} alt="Изображение" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
