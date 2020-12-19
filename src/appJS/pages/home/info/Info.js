import React from "react";

import Image from "../../../elem/image-nav/Image";

import image from "../../../../assets/images/icons/first.png";

const images = [image, image, image, image];

export default class Info extends React.Component {
	render() {
		return (
			<div className="Info main">
				<div className="wrapper">
					{images.map((image, i) => {
						return <Image key={i} image={image} info={this.props.info} />;
					})}
				</div>
			</div>
		);
	}
}
