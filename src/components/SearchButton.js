import React, { Component } from "react";
import styled from "styled-components";
import { Row } from "react-flexbox-grid";
import plane from "../assets/img/plane.svg";

const Button = styled.button`
	width: 100%;
	margin: 16px 0;
	padding: 14px 52px;
	border: 0;
	border-radius: 5px;
	background: #ff9241;
	font-size: 24px;
	color: white;
`;

const Logo = styled.img`
	vertical-align: middle;
	margin-left: 16px;
`;

class SearchButton extends Component {
	render() {
		return (
			<Row middle="xs">
				<Button>
					Найти билеты <Logo src={plane} alt="plane" />
				</Button>
			</Row>
		);
	}
}

export default SearchButton;
