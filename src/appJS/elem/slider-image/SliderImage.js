import React from "react";
import {Carousel} from "react-bootstrap";

export default class SliderImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: this.props.images,
		};
	}
	render() {
		const slider = this.state.images;
		return (
			<Carousel>
				{slider.map((slide, i) => {
					return (
						<Carousel.Item interval={1000}>
							<img className="d-block w-100" src={`${slide}`} key={`${i}`} alt="slide" />
						</Carousel.Item>
					);
				})}
			</Carousel>
		);
	}
}
