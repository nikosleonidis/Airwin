import React from "react";
import {Card} from "react-bootstrap";

import BtnBuy from "../../../elem/button/Buy";
import sphereTop from "../../../../assets/images/exTop.png";
import sphereLeft from "../../../../assets/images/exLeft.png";
const cardStlye = {
	display: "flex",
	justifyContent: "center",
	margin: "50px auto",
	maxWidth: "1440px",
};

export default class Sphere extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardSp: this.props.cardSp,
		};
	}
	render() {
		const cardSp = this.state.cardSp;
		return (
			<div className="Sphere">
				<div className="wrapper-sphere">
					<div className="wrapper-image">
						<img className="image" src={sphereTop} alt="Изображение" />
					</div>
					<div className="image_text">
						<div className="wrapper-image">
							<img className="image" src={sphereLeft} alt="Изображение" />
						</div>
						<div className="wrapper-text">
							<div className="title">Сферы применения</div>
							<div className="text">
								Рециркуляторы можно использовать во многих сферах для снижения риска заболевания
								окружающих людей. Роспотребнадзор рекомендует устанавливать облучатели-рециркуляторы
								для профилактики COVID-19 в сферах услуг
							</div>
							<div className="wrapper-button">
								<BtnBuy btnBuy={this.props.btnBuy} />
							</div>
						</div>
					</div>
					<div style={cardStlye}>
						{cardSp.map((card, i) => {
							return (
								<Card key={`${i}`}>
									<Card.Body>
										<Card.Img variant="top" src={card.image} />
										<Card.Text>{card.text}</Card.Text>
									</Card.Body>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
