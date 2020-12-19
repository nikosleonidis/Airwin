import React from "react";

// import BtnPhoto from "../../../elem/button/Photo";
import SliderImage from "../../../elem/slider-image/SliderImage";
import image from "../../../../assets/images/home/decor.png";
import {Button} from "react-bootstrap";

const images = [image, image, image];

export default class Decor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slider: images,
		};
	}
	render() {
		return (
			<div className="Decor main">
				<div className="wrapper">
					<div className="title">Рециркуляторы в интерьере</div>
					<SliderImage images={this.state.slider} />
					<div className="wrapper-button">
						<Button variant="outline-dark">{this.props.btnPhoto}</Button>
					</div>
				</div>
			</div>
		);
	}
}
