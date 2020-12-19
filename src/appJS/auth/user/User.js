import React from "react";
import Facebook from "../facebook/Facebook";
import Google from "../google/Google";
// import Apple from "../apple/Apple";
import LocaleContext from "../../local/LocaleContext";

const timeout = "Пожалуйста подождите";
const facebook = "Продолжить с Facebook ";
const googleLogout = "Выйти из Google";
const googleLogin = "Продолжить с Google";

export default class User extends React.Component {
	render() {
		return (
			<LocaleContext.Consumer>
				{(locale) => {
					return (
						<div className="wrapper-social">
							<Facebook facebook={facebook} timeout={timeout} />
							<Google googleLogout={googleLogout} googleLogin={googleLogin} />
							{/* <Apple /> */}
						</div>
					);
				}}
			</LocaleContext.Consumer>
		);
	}
}
