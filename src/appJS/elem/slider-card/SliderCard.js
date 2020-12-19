import React from "react";
import {Button, Card} from "react-bootstrap";

export default function SliderCard({textSp, imageSp, imageNews, titleNews, textRate, btnRate}) {
	return (
		<Card style={{width: "18rem"}}>
			{React.Children.map((Child) => {
				return <div>{Child}</div>;
			})}
			<Card.Body>
				<Card.Title></Card.Title>
				<Card.Text>{textSp}</Card.Text>
				<Button variant="primary"></Button>
			</Card.Body>
		</Card>
	);
}
