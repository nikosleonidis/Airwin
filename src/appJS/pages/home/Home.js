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
import spFirst from "../../../assets/images/sphereFirst.png";
import spSecond from "../../../assets/images/sphereSecond.png";
import spThird from "../../../assets/images/sphereThird.png";
import spFourth from "../../../assets/images/sphereFourth.png";
import spFifth from "../../../assets/images/sphereFifth.png";
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
const address = ["Ставропольский край, г. Ессентуки, ул. Советская, 13."];
const btnBuy = "Купить";
const btnConsult = "Получить консультацию";
const btnForm = "Отправить заявку";
const btnPhoto = "Смотреть всю галерею";
const btnList = "Полный прайс";
const btnVideo = "Смотреть видео";
const cardSp = [
	{
		image: spFirst,
		text: "Школы, детские сады, колледжи, ВУЗы",
	},
	{
		image: spSecond,
		text: "Рестораны, бары, кофейни, столовые, кальянные, ночные клубы, фудкорты",
	},
	{
		image: spThird,
		text: "Спортзалы, фитнес-центры, бассейны",
	},
	{
		image: spFourth,
		text: "Офисы, бизнес-центры",
	},
	{
		image: spFifth,
		text: "Магазины, торговые центры",
	},
];
const cardRate = [
	{
		text:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
	},
	{
		text:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
	},
	{
		text:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
	},
	{
		text:
			"Добрый день! Спасибо вам огромное, все рециркуляторы. Все пришло в целости и сохранности. Уже установили, все работает. Обязаательно обратимся еще раз к вам!",
	},
];
const cardNews = [
	{
		image: newsImage,
		title: "Заголовок",
		text: "Какие-то новости",
	},
	{
		image: newsImage,
		title: "Заголовок",
		text: "Какие-то новости",
	},
	{
		image: newsImage,
		title: "Заголовок",
		text: "Какие-то новости",
	},
	{
		image: newsImage,
		title: "Заголовок",
		text: "Какие-то новости",
	},
];

export default class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Start btnBuy={btnBuy} btnVideo={btnVideo} recirculator={recirculator} />
				<Info info={info} />
				<Principle principleText={principleText} principleImage={principleImage} />
				<Sphere btnBuy={btnBuy} cardSp={cardSp} />
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
				<Rate btnList={btnList} cardRate={cardRate} />
				<HowPay />
				<CalcCount
					calcImageTop={calcImageTop}
					calcImageLeft={calcImageLeft}
					calcImageDwLeft={calcImageDwLeft}
					calcImageDwRight={calcImageDwRight}
				/>
				<Asks />
				<Required reqImageTop={reqImageTop} reqImageLeft={reqImageLeft} btnForm={btnForm} />
				<News cardNews={cardNews} />
				<Contact phone={phone} email={email} address={address} />
			</div>
		);
	}
}
