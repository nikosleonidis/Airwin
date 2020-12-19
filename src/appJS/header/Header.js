import React from "react";

import {Link} from "react-router-dom";
import Nav from "../elem/nav/Nav";

const routehome = {
	pathname: "/home",
};

const scrollTop = () => {
	window.scrollTo({top: 0, behavior: "smooth"});
};

export default class Header extends React.Component {
	doMenu = () => {
		var dot = document.getElementById("thedot");
		var burger = document.getElementById("theburger");
		var items = document.getElementById("theitems");
		dot.classList.toggle("fs");
		burger.classList.toggle("fs");
		burger.textContent === "☰" ? (burger.textContent = "✕") : (burger.textContent = "☰");
		items.classList.toggle("fs");
	};
	doItem = () => {
		this.doMenu(this);
	};

	render() {
		return (
			<header className="Header">
				<nav className="wrapper">
					<Link className="wrapper-logo" to={routehome} onClick={scrollTop}>
						<img className="image" src={this.props.logo} alt="AirWin Логотип" />
					</Link>
					<frosted-glass-container stretch="true">
						<frosted-glass blur-amount="5px" overlay-color="#ffffff52"></frosted-glass>
					</frosted-glass-container>
					<div className="navbar">
						<div className="wrapper-menu">
							<div className="menu-bg" id="thedot"></div>
							<div className="menu-burger" id="theburger" onClick={this.doMenu}>
								☰
							</div>
							<div className="menu-items" id="theitems" onClick={this.doItem}>
								<Nav />
							</div>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
