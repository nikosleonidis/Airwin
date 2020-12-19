import React from "react";

// import BtnConsult from "../../../elem/button/Consult";
import SliderImage from "../../../elem/slider-image/SliderImage";
import image from "../../../../assets/images/home/certificate.png";
import {Button} from "react-bootstrap";

const images = [image, image];

export default class Certificate extends React.Component {
	render() {
		return (
			<div className="Certificate main">
				<div className="wrapper">
					<div className="wrapper-text">
						<div className="title">Наша продукция сертифицированна</div>
						<div className="text">
							<p className="p">
								Рециркуляторы можно использовать во многих сферах для снижения риска заболевания
								окружающих людей. Роспотребнадзор рекомендует устанавливать облучатели-рециркуляторы
								для профилактики COVID-19 в сферах услуг
							</p>
							<p className="p">
								Рециркуляторы можно использовать во многих сферах для снижения риска заболевания
								окружающих людей. Роспотребнадзор рекомендует устанавливать облучатели-рециркуляторы
								для профилактики COVID-19 в сферах услуг
							</p>
						</div>
						<div className="wrapper-button">
							<Button variant="dark">{this.props.btnConsult}</Button>
						</div>
					</div>
					<div className="wrapper-image">
						<SliderImage images={images} />
					</div>
				</div>
			</div>
		);
	}
}
