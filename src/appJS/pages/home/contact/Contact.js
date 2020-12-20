import React from "react";

export default class Contact extends React.Component {
	render() {
		return (
			<div className="Contact">
				<div className="wrapper-cont">
					<div className="title">Контакты</div>
					<div className="wrapper-cont__map">
						<div className="wrapper-info">
							<div className="cont">
								<div className="wrapper-data">
									<div className="phone">Телефон:</div>
									<div className="email">E-mail:</div>
									<div className="addr">
										Адрес <br />
										производства:
									</div>
								</div>
								<div className="wrapper-data">
									<div className="phone"> {this.props.phone}</div>
									<div className="email">{this.props.email}</div>
									<div className="addr">{this.props.address}</div>
								</div>
							</div>
						</div>
						<div className="wrapper-map">
							<div style={{position: "relative", overflow: "hidden"}}>
								<a
									href="https://yandex.fr/maps/11057/essentuky/?utm_medium=mapframe&utm_source=maps"
									style={{color: "#eee", position: "absolute", top: "0px"}}>
									Ессентуки
								</a>
								<a
									href="https://yandex.fr/maps/11057/essentuky/house/sovetskaya_ulitsa_13/YEsYfgJkQEQFQFpufXx1dX1mYg==/?from=api-maps&ll=42.854912%2C44.044157&utm_medium=mapframe&utm_source=maps&z=17"
									style={{color: "#eee", position: "absolute", top: "30px"}}>
									Советская улица, 13 — Яндекс.Карта
								</a>
								<iframe
									src="https://yandex.fr/map-widget/v1/-/CCUEvYVU3C"
									style={{position: "relative"}}
									title="Airwin"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
