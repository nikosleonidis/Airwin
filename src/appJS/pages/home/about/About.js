import React from "react";

import BtnVideo from "../../../elem/button/Video";

export default class About extends React.Component {
	render() {
		return (
			<div className="About">
				<div className="wrapper-about">
					<div className="wrapper-image">
						<img className="image" src={this.props.aboutTop} alt="О производстве" />
					</div>
					<div className="wrapper-about__text">
						<div className="wrapper-text">
							<div className="title">О производстве</div>
							<div className="text">
								Рециркуляторы можно использовать во многих сферах для снижения риска заболевания
								окружающих людей. Роспотребнадзор рекомендует устанавливать облучатели-рециркуляторы
								для профилактики COVID-19 в сферах услуг
							</div>
							<div className="wrapper-btn__video">
								<div className="wrapper-button">
									<BtnVideo />
								</div>
								<div className="btn-text">
									Смотреть видео <br />с нашего производства
								</div>
							</div>
						</div>
						<div className="wrapper-image">
							<img className="image" src={this.props.aboutRight} alt="О производстве" />
						</div>
					</div>
					<div className="wrapper-image">
						<img className="image-dw" src={this.props.aboutDwLeft} alt="О производстве" />
						<img className="image-dw" src={this.props.aboutDwRight} alt="О производстве" />
					</div>
				</div>
			</div>
		);
	}
}
