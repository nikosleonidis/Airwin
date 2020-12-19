import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import User from "../../auth/user/User";

const routeHome = {
	pathname: "/home",
};
const routeCatalog = {
	pathname: "/catalog",
};
const routeContact = {
	pathname: "/contact",
};
const routeDelivery = {
	pathname: "/delivery",
};
const privacy = {
	pathname: "/privacy",
};
const registration = {
	pathname: "/registration",
};
export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isHide: false,
			isCheck: true,
		};
	}
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen,
			isHide: !this.state.isHide,
			// isCheck: !this.state.isCheck,
		});
	};

	render() {
		return (
			<ul className="nav">
				<div className="wrapper-nav">
					<Link className="link" to={routeHome}>
						Главная
					</Link>
					<Link className="link" to={routeCatalog}>
						Каталог
					</Link>
					<Link className="link" to={routeContact}>
						Контакты
					</Link>
					<Link className="link" to={routeDelivery}>
						Оплата и доставка
					</Link>
				</div>
				<div className="login">
					<Link className="link" to="#" onClick={this.toggleModal}>
						Вход
					</Link>
				</div>
				<Modal
					show={this.state.isOpen}
					onHide={this.toggleModal}
					backdrop="static"
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>
							<h1>Войти</h1>
							<p className="new-user">
								Новый пользователь?
								<Link className="registration" to={registration}>
									Создать учетную запись
								</Link>
							</p>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									E-mail
								</Form.Label>
								<Col sm={10}>
									<Form.Control type="email" placeholder="Адрес электронной почты" />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="formHorizontalPassword">
								<Form.Label column sm={2}>
									Пароль
								</Form.Label>
								<Col sm={10}>
									<Form.Control type="password" placeholder="Пароль" />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="formHorizontalCheck">
								<Col sm={{span: 10, offset: 2}}>
									<Form.Check label="Запомнить меня" />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Col sm={{span: 10, offset: 2}}>
									<Button type="submit">Войти</Button>
								</Col>
							</Form.Group>
						</Form>
						<hr className="RuleWithText EmailPage__social-separator mt-xs-3" data-content="Или" />
						<User />
					</Modal.Body>
					<Modal.Footer>
						<i className="fas fa-users-class ">
							Согласен с условиями и принимаю
							<Link className="link" to={privacy} target="_blank">
								<i className="fas fa-users-class">лицензионное соглашение</i>
							</Link>
							на обработку данных
						</i>
					</Modal.Footer>
				</Modal>
			</ul>
		);
	}
}
