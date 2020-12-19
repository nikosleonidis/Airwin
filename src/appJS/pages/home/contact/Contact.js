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
									<div className="addr">{this.props.addr}</div>
								</div>
							</div>
						</div>
						<div className="wrapper-map">
							<div style={{position: "relative", overflow: "hidden"}}>
								<a
									href="https://yandex.eu/maps?utm_medium=mapframe&utm_source=maps"
									style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>
									Yandex.Maps
								</a>
								<a
									href="https://yandex.eu/maps/11069/stavropol-krai/house/ulitsa_mikoyana_206/YEsYfgRlSkYPQFpufXx2cH5hZg==/?ll=42.835338%2C44.071222&utm_medium=mapframe&utm_source=maps&z=17.34"
									style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>
									Ulitsa Mikoyana, 206 — Yandex.Maps
								</a>
								<iframe
									src="https://yandex.com/map-widget/v1/-/CCUEqUhAgB"
									style={{position: "relative"}}
									title="Яндекс Карта"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
