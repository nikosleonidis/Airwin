import React from "react";

import BtnBuy from "../../../elem/button/Buy";
import SliderCard from "../../../elem/slider-card/SliderCard";

const cardStlye = {
	display: "flex",
	justifyContent: "center",
	margin: "50px auto",
	maxWidth: "1440px",
};

export default function Sphere({cardData, sphereTop, sphereLeft, btnBuy}) {
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
							<BtnBuy btnBuy={btnBuy} />
						</div>
					</div>
				</div>
				<div style={cardStlye}>
					{cardData.map((imageSp, textSp) => {
						return <SliderCard imageSp={imageSp} textSp={textSp} key={`${(imageSp, textSp)}`} />;
					})}
				</div>
			</div>
		</div>
	);
}
