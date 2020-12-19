import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import LocaleContext from "./local/LocaleContext";

import NotFound from "./pages/NotFound";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Contact from "./pages/contact/Contact";
import Delivery from "./pages/delivery/Delivery";
import Privacy from "./pages/privacy/Privacy";

import "../appJSstyles/App.scss";

import logo from "../assets/images/icons/logo.svg";

const phone = [111111];
const icons = ["hello"];
const address = ["some text"];
const strong = [30];
const action = [100];
const attr = [46];
const price = [5800];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locale: "ru",
			toggleLocale: () => {
				this.setState(({locale}) => ({
					locale: locale === "ru" ? "en" : "gr",
				}));
			},
		};
	}

	isNotFoud = window.location.pathname.includes(
		"./home" || "./catalog" || "./contact" || "./delivery" || "./privacy",
	);
	pageStyle = this.isNotFoud ? {diplay: "none"} : {display: "flex"};

	render() {
		const pages = (content) => {
			return (
				<>
					<Header logo={logo} />
					{content}
					<Footer phone={phone} icons={icons} address={address} />
				</>
			);
		};
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<LocaleContext.Provider value={this.state}>
							<Route
								exact
								path="/home"
								render={() =>
									pages(
										<Home
											phone={phone}
											icons={icons}
											address={address}
											strong={strong}
											action={action}
											attr={attr}
											price={price}
											style={this.pageStyle}
										/>,
									)
								}
							/>
							<Route path="/catalog" render={() => pages(<Catalog style={this.pageStyle} />)} />
							<Route path="/contact" render={() => pages(<Contact style={this.pageStyle} />)} />
							<Route path="/delivery" render={() => pages(<Delivery style={this.pageStyle} />)} />
							<Route path="/privacy" render={() => pages(<Privacy style={this.pageStyle} />)} />
							{/* <Route to="*" render={() => <NotFound />} /> */}
						</LocaleContext.Provider>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
