import React, { Component } from 'react';
import './style.css';

import finder from './img/finder.svg';

class Header extends Component {
	state = {
		message: "검색어를 입력하세요",
	}

	navigator() {
		var buttons = ["상점", "의사추천", "헬로우", "월드"]

		var categories = []
		for (let i = 0; i < buttons.length; i++)
			categories.push(<li><input className="category-button" type="button" value={buttons[i]} /></li>)

		return (
			<nav className="category">
				<ul> {categories} </ul>
			</nav>
		)
	}

	finder() {
		return (
			<div className="find">
				<input className="search-box" type="text" placeholder={this.state.message} />
				<button className="search-button"><img src={finder} /></button>
		    </div>
		)
	}

	render() {
		return (
			<header id="header">
				<div className="title">
					<a className="big-title" href="index.html" type="button">동물병원 KIOSK</a>
					<br />
					<a className="small-title" href="index.html" type="button">Your Petshop Partner</a>
				</div>
				{this.navigator()}
				{this.finder()}
			</header>
		);
	}
}

export { Header };
