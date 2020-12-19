import React from "react";

// import rateImage from "../../../assets/images/rate-img.png";

// const images = [rateImage, rateImage, rateImage, rateImage];

export default class Rates extends React.Component {
	render() {
		return (
			<div className="wrapper-rate">
				<div className="rate">
					{this.props.rate.text}
					{this.props.rate.button}
				</div>
			</div>
		);
	}
}
