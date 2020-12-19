import React from "react";

export default class HowPay extends React.Component {
	render() {
		return (
			<div className="HowPay main">
				<div className="wrapper">
					<div className="title">Как сделать заказ</div>
					<div className="wrapper-user">
						<div className="wrapper-list">
							<div className="wrapper-image">
								<img className="image" src={this.props.pers} alt="Иконка" />
							</div>
							<div className="wrapper-text">
								<div className="title">Вы - физлицо</div>
								<div className="text">
									<p className="p">Вы оформляете заявку на нашем сайте</p>
									<p className="p">Вы оформляете заявку на нашем сайте</p>
									<p className="p">
										Менеджер обрабатывает заявку и передает посылку в курьерскую службу.
									</p>
									<p className="p">
										Вы получаете прибор, проверяете его и производите оплату курьеру.
									</p>
								</div>
							</div>
						</div>
						<div className="wrapper-list">
							<div className="wrapper-image">
								<img className="image" src={this.props.corp} alt="Иконка" />
							</div>
							<div className="wrapper-text">
								<div className="title">Вы - юрлицо</div>
								<div className="text">
									<p className="p">
										Поставка юрлицам осуществляется по 100% предоплате по безналичному расчету
									</p>
									<p className="p">
										Вы можете заполнить форму ниже и мы свяжемся с Вами, либо сразу прислать свой
										запрос и реквизиты для выставления счета на почту zakaz@купить-рециркулятор.рф —
										это ускорит процесс обработки заказа.
									</p>
									<p className="p">
										Цены для Юр. лиц — от производителя Заказы до 100 шт. отгружаются в день
										зачисления денег на наш расчетный счет. Заказы от 100 до 200 шт. отгружаются в
										течении 4х рабочих дней после оплаты без предварительного бронирования. Отгрузки
										заказов более 200 шт. осуществляются по согласованию с менеджером
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
