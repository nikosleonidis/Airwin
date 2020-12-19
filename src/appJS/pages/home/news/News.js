import React from "react";

// import SliderCard from "../../../elem/slider-card/SliderCard";

export default function News({cardData}) {
	return (
		<div className="News main">
			<div className="wrapper">
				<div className="title">Новости</div>
				<div className="wrapper-cards__news">
					{/* {cardData.map((imageNews) => {
						return <SliderCard imageNews={imageNews} key={`${imageNews}`} />;
					})} */}
					{/* {cardData.map((imageNews, titleNews) => {
						return <SliderCard imageNews={imageNews} titleNews={titleNews} key={`${(imageNews, titleNews)}`} />;
					})} */}
				</div>
			</div>
		</div>
	);
}
