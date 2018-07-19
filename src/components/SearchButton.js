import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import plane from "../assets/img/plane.svg";

const ButtonRow = styled(Row)`
	margin: 16px -8px;
	font-size: 24px;
    font-weight: bold;
	color: white;
    @media (min-width: 768px) {
        margin: 32px 0;
        font-size: 28px;
    }
    @media (min-width: 1440px) {
        margin: 48px 0;
    }
`;

const ButtonCol = styled(Col)`
    background: #ff9241;
    border-radius: 4px;
    padding: 14px 0;
`;

const Logo = styled.img`
	vertical-align: middle;
	margin-left: 16px;
    @media (min-width: 768px) {
        margin-left: 24px;
    }
`;

class SearchButton extends Component {
	render() {
		return (
            <ButtonRow middle="xs" center="xs">
                <ButtonCol xs={12} md={6}>
                    Найти билеты<Logo src={plane} alt="plane" />
                </ButtonCol>
            </ButtonRow>
		);
	}
}

export default SearchButton;
