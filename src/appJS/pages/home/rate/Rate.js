import React from "react";
import {Card} from "react-bootstrap";

import BtnList from "../../../elem/button/List";

export default class Rate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardRate: this.props.cardRate,
		};
	}
	render() {
		const cardRate = this.state.cardRate;
		return (
			<div className="Rate main">
				<div className="wrapper">
					<div className="title">Отзывы</div>
					<div className="wrapper-rate__block">
						<div className="p">
							Уже сотни клиентов доверились нам. Мы уверены в качестве нашей продукции и благодарные
							слова покупателей говорят об этом!
						</div>
						<div className="content">
							<div className="content-rates">
								{cardRate.map((card, i) => {
									return (
										<Card key={`${i}`}>
											<Card.Body>
												<Card.Title>{card.title}</Card.Title>
												<Card.Text>{card.text}</Card.Text>
											</Card.Body>
										</Card>
									);
								})}
							</div>
						</div>
						<div className="wrapper-button">
							<BtnList btnList={this.props.btnList} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
