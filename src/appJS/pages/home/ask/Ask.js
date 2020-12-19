import React from "react";
import {Button, Card} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
// import Accordions from "../../../elem/accordion/Accordions";

const asksCards = [
	{
		ask: <p className="p">Можно ли использовать рециркулятор, когда рядом находятся люди?</p>,
		answer: (
			<div className="p">
				Рециркуляторы AIRWIN абсолютно безопасны для людей и животных. Они могут работать в
				присутсвии детей, беременных и людей старшего поколения
			</div>
		),
	},
	{
		ask: <p className="p">Можно ли использовать рециркулятор, когда рядом находятся люди?</p>,
		answer: (
			<div className="p">
				Рециркуляторы AIRWIN абсолютно безопасны для людей и животных. Они могут работать в
				присутсвии детей, беременных и людей старшего поколения
			</div>
		),
	},
	{
		ask: <p className="p">Можно ли использовать рециркулятор, когда рядом находятся люди?</p>,
		answer: (
			<div className="p">
				Рециркуляторы AIRWIN абсолютно безопасны для людей и животных. Они могут работать в
				присутсвии детей, беременных и людей старшего поколения
			</div>
		),
	},
	{
		ask: <p className="p">Можно ли использовать рециркулятор, когда рядом находятся люди?</p>,
		answer: (
			<div className="p">
				Рециркуляторы AIRWIN абсолютно безопасны для людей и животных. Они могут работать в
				присутсвии детей, беременных и людей старшего поколения
			</div>
		),
	},
];

export default class Ask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			background: true,
			show: false,
		};
	}
	clickHandleFirst = () => {
		this.setState((prev) => ({show: !prev.show}));
		this.setState({
			background: !this.state.background,
		});
	};

	render() {
		// const {answer} = this.state;
		return (
			<div className="Ask main">
				<div className="wrapper">
					<div className="title">Частые вопросы</div>
					<div className="wrapper-ask-answer">
						<div className="ask-answer">
							{asksCards.map((askCard, a) => {
								return (
									<Accordion defaultActiveKey="0" key={a}>
										<Card>
											<Card.Header>
												<Accordion.Toggle as={Button} variant="link" eventKey="1">
													{askCard.ask}
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey="1">
												<Card.Body>{askCard.answer}</Card.Body>
											</Accordion.Collapse>
										</Card>
									</Accordion>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
