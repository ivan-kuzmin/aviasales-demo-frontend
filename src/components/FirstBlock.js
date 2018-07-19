import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import logo from "../assets/img/logo.svg";
import Search from "./Search";
import SearchButton from "./SearchButton";

const Background = styled.div`
	background: linear-gradient(
		to bottom right,
		#00b0de 0%,
		#01aedc 3.7%,
		#02abdb 7.44%,
		#02abdb 11.16%,
		#02abdb 11.38%,
		#196ebd 100%
	);
	min-height: 500px;
	height: 100vh;
	padding-left: 6px;
	padding-right: 6px;
`;

const ContainerGrid = styled(Grid)`
	position: relative;
	height: 100%;
`;

const Logo = styled.div`
	position: absolute;
	display: flex;
	top: 12px;
`;

const LogoText = styled.span`
	color: white;
	margin: auto 12px;
	font-size: 20px;
	display: none;
	@media (min-width: 768px) {
		display: inline;
	}
`;

const ContentRow = styled(Row)`
	height: 100%;
`;

const ContentCol = styled(Col)`
	color: white;
`;

const Title = styled.h1`
	font-size: 20px;
	line-height: 23px;
	margin-bottom: 16px;
	margin-left: -8px;
	margin-right: -8px;
	@media (min-width: 768px) {
		font-size: 32px;
		margin-bottom: 8px;
		line-height: 48px;
	}
	@media (min-width: 1440px) {
		font-size: 40px;
	}
`;

const SubTitle = styled.h2`
	font-size: 20px;
	line-height: 23px;
	margin-top: 0;
	display: none;
	@media (min-width: 768px) {
		display: block;
		margin-bottom: 40px;
	}
	@media (min-width: 1440px) {
		font-size: 24px;
	}
`;

class FirstBlock extends Component {
	render() {
		return (
			<Background>
				<ContainerGrid>
					<Row>
						<Logo>
							<img src={logo} alt="Logo" />
							<LogoText>aviasales</LogoText>
						</Logo>
					</Row>
					<ContentRow center="xs" middle="xs">
						<ContentCol xs={12} md={10}>
							<Title>Поиск дешевых авиабилетов</Title>
							<SubTitle>
								Лучший способ купить авиабилеты дешево
							</SubTitle>
							<Search />
							<SearchButton />
						</ContentCol>
					</ContentRow>
				</ContainerGrid>
			</Background>
		);
	}
}

export default FirstBlock;
