import React from "react";
import {Button} from "react-bootstrap";

export default class CalcCount extends React.Component {
	render() {
		return (
			<div className="CalcCount">
				<div className="wrapper-calc">
					<div className="wrapper-image">
						<img className="image" src={this.props.calcImageTop} alt="Изображение" />
					</div>
					<div className="wrapper-img-calc">
						<div className="wrapper-image">
							<img className="image" src={this.props.calcImageLeft} alt="Изображение" />
						</div>
						<div className="wrapper-calc">
							<div className="calc">
								<div className="title">Расчет количества рециркуляторов</div>
								<div className="p">Параметры помещения</div>
								<div className="wrapper-form">
									<input placeholder="Длина, м" />
									<input placeholder="Ширина, м" />
									<input placeholder="Высота, м" />
									<input placeholder="Желаемое время полной очистки помещения" />
								</div>
								<div className="wrapper-button">
									<Button variant="dark">Рассчитать</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="wrapper-image">
						<img className="image-dw" src={this.props.calcImageDwLeft} alt="Изображение" />
						<img className="image-dw" src={this.props.calcImageDwRight} alt="Изображение" />
					</div>
				</div>
			</div>
		);
	}
}
