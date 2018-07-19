import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import arrow from "../assets/img/arrow.svg";
import calendar from "../assets/img/calendar.svg";
import shape from "../assets/img/shape.svg";

const BigRow = styled(Row)`
	border-radius: 7px;
	overflow: hidden;
    line-height: 20px;
`;

const SearchCol = styled(Col)`
	color: black;
	padding: 0;
`;

const SearchRow = styled(Row)`
	background: white;
	padding: 18px 16px;
    max-height: 56px;
	margin: 1px;
`;

const GrayText = styled.span`
    color: #a0b0b9;
`;

const Logo = styled.img`
	vertical-align: middle;
	margin-left: 11px;
`;

class Search extends Component {
	render() {
		return (
			<BigRow>
				<SearchCol xs={12}>
					<SearchRow between="xs" middle="xs">
						<Col>Москва</Col>
						<Col>
							<GrayText>MOW</GrayText> <Logo src={arrow} alt="arrow" />
						</Col>
					</SearchRow>
				</SearchCol>
				<SearchCol xs={12}>
					<SearchRow between="xs">
						<Col><GrayText>Город прибытия</GrayText></Col>
					</SearchRow>
				</SearchCol>
				<SearchCol xs={6}>
					<SearchRow between="xs">
						<Col><GrayText>Туда</GrayText></Col>
						<Col>
							<Logo src={calendar} alt="calendar" />
						</Col>
					</SearchRow>
				</SearchCol>
				<SearchCol xs={6}>
					<SearchRow between="xs">
						<Col><GrayText>Обратно</GrayText></Col>
						<Col>
							<Logo src={calendar} alt="calendar" />
						</Col>
					</SearchRow>
				</SearchCol>
				<SearchCol xs={12}>
					<SearchRow between="xs">
						<Col>1 пассажир, <GrayText>эконом</GrayText></Col>
                        <Col>
                            <Logo src={shape} alt="shape" />
                        </Col>
					</SearchRow>
				</SearchCol>
			</BigRow>
		);
	}
}

export default Search;
