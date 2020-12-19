import React from "react";
import {Button} from "react-bootstrap";
import {FacebookProvider, Login} from "react-facebook";

export default class Facebook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			userID: "",
			name: "",
			email: "",
			picture: "",
		};
	}
	handleResponse = (response) => {
		console.log(response);
		if (response.status !== "unknown")
			this.setState({
				isLoggedIn: true,
				userID: response.userID,
				name: response.name,
				email: response.email,
				picture: response.picture.data.url,
			});
	};

	handleError = (error) => {
		this.setState({error});
	};

	render() {
		return (
			<div className="wrap-btn">
				<FacebookProvider appId="2807300049516484">
					<Login scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
						{({loading, handleClick, error, response}) => (
							<Button onClick={handleClick}>{this.props.facebook}</Button>
						)}
						{/* {loading && <span>{this.props.timeout}...</span>} */}
					</Login>
				</FacebookProvider>
			</div>
		);
	}
}
