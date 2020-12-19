import React from "react";
import {Button} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from "react-google-login";

const CLIENT_ID = "<your Client ID>";

export default class Google extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogined: false,
			accessToken: "",
		};
		// this.login = this.login.bind(this);
		// this.handleLoginFailure = this.handleLoginFailure.bind(this);
		// this.logout = this.logout.bind(this);
		// this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
	}

	login = (response) => {
		if (response.accessToken) {
			this.setState((state) => ({
				isLogined: true,
				accessToken: response.accessToken,
			}));
		}
	};
	logout = (response) => {
		this.setState((state) => ({
			isLogined: false,
			accessToken: "",
		}));
	};
	handleLoginFailure = (response) => {
		// alert("Failed to log in");
	};
	handleLogoutFailure = (response) => {
		alert("Failed to log out");
	};

	render() {
		return (
			<div className="wrap-btn">
				{this.state.isLogined ? (
					<GoogleLogout
						clientId={CLIENT_ID}
						buttonText={this.props.googleLogout}
						onLogoutSuccess={this.logout}
						onFailure={this.handleLogoutFailure}
					/>
				) : (
					<GoogleLogin
						clientId="AIzaSyAn-BvX9MZ7E1x12Pax-miKJQy2Lft4vuQ"
						render={(renderProps) => (
							<Button onClick={renderProps.onClick}>{this.props.googleLogin}</Button>
						)}
						buttonText={this.props.googleLogin}
						onSuccess={this.responseGoogle}
						onFailure={this.esponseGoogle}
						cookiePolicy={"single_host_origin"}
					/>
				)}
				{/* {this.state.accessToken ? (
					<h5>
						Your Access Token: <br />
						<br /> {this.state.accessToken}
					</h5>
				) : null} */}
			</div>
		);
	}
}
