import React from "react";

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="Footer">
				<div className="wrapper-footer">
					<div className="wrapper-footer-nav">
						<div className="wrapper-nav">
							<ul>
								<div className="title">Навигация</div>
								<div className="link">Продукция</div>
								<div className="link">Отзывы</div>
								<div className="link">Карта</div>
							</ul>
						</div>
						<div className="wrapper-nav">
							<ul>
								<div className="title">Помощь</div>
								<div className="link">Как оплатить</div>
								<div className="link">Как мы доставляем</div>
								<div className="link">Возврат товара</div>
							</ul>
						</div>
						<div className="wrapper-nav">
							<ul>
								<div className="title">Информация</div>
								<div className="link">Новоости</div>
								<div className="link">События</div>
								<div className="link">Акции</div>
							</ul>
						</div>
						<div className="wrapper-nav">
							<ul>
								<div className="title">О нас</div>
								<div className="link">Вакансии</div>
								<div className="link">Отдел продаж</div>
								<div className="link">Технический отдел</div>
							</ul>
						</div>
					</div>
					<div className="wrapper-footer-bar">
						<p className="p">Copyright © 2020 Airwin. Все права защищены</p>
					</div>
				</div>
			</footer>
		);
	}
}
