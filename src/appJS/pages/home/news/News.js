import React from "react";
import {Card} from "react-bootstrap";

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardNews: this.props.cardNews,
		};
	}
	render() {
		const cardNews = this.state.cardNews;
		return (
			<div className="News main">
				<div className="wrapper">
					<div className="title">Новости</div>
					<div className="wrapper-cards__news">
						{cardNews.map((card, i) => {
							return (
								<Card key={`${i}`}>
									<Card.Body>
										<Card.Img variant="top" src={card.image} />
										<Card.Title>{card.title}</Card.Title>
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
