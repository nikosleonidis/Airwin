import React from "react";

import AppleLogin from "react-apple-login";

export default class Apple extends React.Component {
	render() {
		return (
			<AppleLogin
				clientId={"com.react.apple.login"}
				redirectURI={"https://redirectUrl.com"}
				responseType={"id_token"}
				responseMode={"form_post"}
				usePopup={false}
				designProp={{
					height: 30,
					width: 140,
					color: "white",
					border: false,
					type: "sign-in",
					border_radius: 15,
					scale: 1,
					locale: "ru_RU",
				}}
			/>
		);
	}
}
