import React from "react";

import cheked from "../../../../assets/images/icons/cheked.svg";
import delivery from "../../../../assets/images/icons/delivery.svg";
import unbox from "../../../../assets/images/icons/unbox.svg";
import money from "../../../../assets/images/icons/money.svg";
import credit from "../../../../assets/images/icons/credit.svg";
import edit from "../../../../assets/images/icons/edit.svg";
import storage from "../../../../assets/images/icons/storage.svg";

const person = [
	<ul className="text" key={9}>
		<li>
			<span>
				<img src={cheked} alt="Иконка" />
			</span>
			<p>
				Вы оформляете заявку на <br /> нашем сайте
			</p>
			<div className="arr__down" />
		</li>
		<li>
			<span>
				<img src={delivery} alt="Иконка" />
			</span>
			<p>Менеджер обрабатывает заявку и передает посылку в курьерскую службу</p>
			<div className="arr__right" />
		</li>
		<li>
			<span>
				<img src={unbox} alt="Иконка" />
			</span>
			<p>Вы получаете прибор и проверяете его</p>
			<div className="arr__left" />
		</li>
		<li>
			<span>
				<img src={money} alt="Иконка" />
			</span>
			<p>Производите оплату курьеру</p>
		</li>
	</ul>,
];
const corp = [
	<ul className="text" key={10}>
		<li>
			<span>
				<img src={credit} alt="Иконка" />
			</span>
			<p>Поставка юрлицам осуществляется по 100% предоплате по безналичному расчету</p>
			<div className="arr__right" />
		</li>
		<li>
			<span>
				<img src={edit} />
			</span>
			<p>
				Вы можете заполнить форму ниже и мы свяжемся с Вами, либо сразу прислать свой запрос и
				реквизиты для выставления счета на почту zakaz@купить-рециркулятор.рф — это ускорит процесс
				обработки заказа.
			</p>
			<div className="arr__left" />
		</li>
		<li>
			<span>
				<img src={storage} alt="Иконка" />
			</span>
			<p>
				Цены для Юр. лиц — от производителя Заказы до 100 шт. отгружаются в день зачисления денег на
				наш расчетный счет. Заказы от 100 до 200 шт. отгружаются в течении 4х рабочих дней после
				оплаты без предварительного бронирования. Отгрузки заказов более 200 шт. осуществляются по
				согласованию с менеджером
			</p>
		</li>
	</ul>,
];

export default class HowPay extends React.Component {
	render() {
		return (
			<div className="HowPay main">
				<div className="wrapper">
					<div className="title">Как сделать заказ</div>
					<div className="content-wrapper">
						<div className="flex">
							<p>Вы - физлицо</p>
							<div className="content-text">{person}</div>
						</div>
						<div className="flex">
							<p>Вы - юрлицо</p>
							<div className="content-text">{corp}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
