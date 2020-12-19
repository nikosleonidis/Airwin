import React from "react";

import Start from "./start/Start";
import Info from "./info/Info";
import Principle from "./principle/Principle";
import Sphere from "./sphere/Sphere";
import Models from "./modelSlider/Models";
import About from "./about/About";
import Manufact from "./manufact/Manufact";
import Decor from "./decor/Decor";
import Certificate from "./certificatess/Certificate";
import Rate from "./rate/Rate";
import HowPay from "./howPay/HowPay";
import CalcCount from "./calcCount/CalcCount";
import Asks from "./ask/Ask";
import Required from "./required/Required";
import News from "./news/News";
import Contact from "./contact/Contact";

import recirculator from "../../../assets/images/recirculator.png";
import principleImage from "../../../assets/images/principle.png";

import first from "../../../assets/images/sphereFirst.png";
import second from "../../../assets/images/sphereSecond.png";
import third from "../../../assets/images/sphereThird.png";
import fourth from "../../../assets/images/sphereFourth.png";
import fifth from "../../../assets/images/sphereFifth.png";
import sphereTop from "../../../assets/images/exTop.png";
import sphereLeft from "../../../assets/images/exLeft.png";
import aboutTop from "../../../assets/images/frame139.png";
import aboutRight from "../../../assets/images/frame140.png";
import aboutDwLeft from "../../../assets/images/frame141.png";
import aboutDwRight from "../../../assets/images/frame142.png";
import calcImageTop from "../../../assets/images/calcImageTop.png";
import calcImageLeft from "../../../assets/images/calcImageLeft.png";
import calcImageDwLeft from "../../../assets/images/calcImageDwLeft.png";
import calcImageDwRight from "../../../assets/images/calcImageDwRight.png";
import reqImageTop from "../../../assets/images/reqImageTop.png";
import reqImageLeft from "../../../assets/images/reqImageLeft.png";
import newsImage from "../../../assets/images/home/news.png";
import pers from "../../../assets/images/icons/pers.png";
import corp from "../../../assets/images/icons/corp.png";

const info = [
	<div className="title" key={6}>
		Доказанная эффективность против COVID-19
	</div>,
];
const principleText = [
	<div className="text" key={7}>
		<div className="title">Принцип работы</div>
		<ul className="nav-list">
			<li>
				<span className="span">
					Воздух, находящийся в помещении, втягивается через основание рециркулятора.
				</span>
			</li>
			<li>
				<span className="span">
					Бактерицидная ультрафиолетовая лампа уничтожает 99,9% бактерий и вирусов, в том числе и
					COVID-19.
				</span>
			</li>
			<li>
				<span className="span">Вентилятор возвращает из корпуса очищенный воздух в помещение</span>
			</li>
			<li>
				<span className="span">Пока прибор включен, воздух очищается постоянно</span>
			</li>
			<li>
				<span className="span">
					Прибор можно установить на столе, на полу, закрепить на стене и потолке
				</span>
			</li>
		</ul>
	</div>,
];
const phone = ["+7 (928) 345-56-78"];
const email = ["recirkylator@gmail.com"];
const addr = ["Ставропольский край, пос. Санамер, ул. Микояна, 201"];
const btnBuy = "Купить";
const btnConsult = "Получить консультацию";
const btnForm = "Отправить заявку";
const btnPhoto = "Смотреть всю галерею";
const btnList = "Полный прайс";
const btnVideo = "Смотреть видео";
const cardData = [
	{
		imageSp: first,
		// title: "",
		textSp: "Школы, детские сады, колледжи, ВУЗы",
	},
	{
		imageSp: second,
		// title: "",
		textSp: "Рестораны, бары, кофейни, столовые, кальянные, ночные клубы, фудкорты",
	},
	{
		imageSp: third,
		// title: "",
		textSp: "Спортзалы, фитнес-центры, бассейны",
	},
	{
		imageSp: fourth,
		// title: "",
		textSp: "Офисы, бизнес-центры",
	},
	{
		imageSp: fifth,
		// title: "",
		textSp: "Магазины, торговые центры",
	},
	{
		textRate:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
		btnRate: (
			<div className="wrapper-button">
				<button className="button">Читать полный отзыв</button>
			</div>
		),
	},
	{
		textRate:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
		btnRate: (
			<div className="wrapper-button">
				<button className="button">Читать полный отзыв</button>
			</div>
		),
	},
	{
		textRate:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
		btnRate: (
			<div className="wrapper-button">
				<button className="button">Читать полный отзыв</button>
			</div>
		),
	},
	{
		textRate:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
		btnRate: (
			<div className="wrapper-button">
				<button className="button">Читать полный отзыв</button>
			</div>
		),
	},
	{
		imageNews: newsImage,
		titleNews: "Расширение производства",
		textNews: "14 октября мы расширили производство рециркуляторов, теперь вы можете...",
	},
	{
		imageNews: newsImage,
		titleNews: "Заголовок",
		textNews: "Скоро будут новости...",
	},
	{
		imageNews: newsImage,
		titleNews: "Расширение",
		textNews: "Мы расширили производство рециркуляторов",
	},
	{
		imageNews: newsImage,
		titleNews: "Производства",
		textNews: "Скоро будут новости...",
	},
];

export default class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Start btnBuy={btnBuy} btnVideo={btnVideo} recirculator={recirculator} />
				<Info info={info} />
				<Principle principleText={principleText} principleImage={principleImage} />
				<Sphere btnBuy={btnBuy} sphereTop={sphereTop} sphereLeft={sphereLeft} cardData={cardData} />
				<Models
					strong={this.props.strong}
					action={this.props.action}
					attr={this.props.attr}
					price={this.props.price}
					btnBuy={btnBuy}
					btnList={btnList}
					recirculator={recirculator}
				/>
				<About
					aboutTop={aboutTop}
					aboutRight={aboutRight}
					aboutDwLeft={aboutDwLeft}
					aboutDwRight={aboutDwRight}
				/>
				<Manufact />
				<Decor btnPhoto={btnPhoto} />
				<Certificate btnConsult={btnConsult} />
				<Rate btnList={btnList} cardData={cardData} />
				<HowPay pers={pers} corp={corp} />
				<CalcCount
					calcImageTop={calcImageTop}
					calcImageLeft={calcImageLeft}
					calcImageDwLeft={calcImageDwLeft}
					calcImageDwRight={calcImageDwRight}
				/>
				<Asks />
				<Required reqImageTop={reqImageTop} reqImageLeft={reqImageLeft} btnForm={btnForm} />
				<News cardData={cardData} />
				<Contact phone={phone} email={email} addr={addr} />
			</div>
		);
	}
}
