import React from "react";

// import BtnList from "../../../elem/button/List";
// import SliderCard from "../../../elem/slider-card/SliderCard";
// import Rates from "../../../elem/rates/Rates";

export default function Rate({cardData}) {
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
							{/* {cardData.map((textRate, btnRate) => {
								return (
									<SliderCard
										textRate={textRate}
										btnRate={btnRate}
										key={`${(textRate, cardData)}`}
									/>
								);
							})} */}
						</div>
					</div>
					{/* <div className="wrapper-button">
						<BtnList btnList={this.props.btnList} />
					</div> */}
				</div>
			</div>
		</div>
	);
}
