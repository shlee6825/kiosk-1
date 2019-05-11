import React, { Component } from 'react';
import './css/style.css';
import finder from './css/finder.svg';
import {Link} from 'react-router-dom'
import { ProductConsumer } from '../context';


export default class Header extends Component {

	navigator() {
		var buttons = ["상점", "의사추천", "헬로우", "월드"]
		// var categories = []
		// for (let i = 0; i < buttons.length; i++)
		// 	categories.push(<li><input className="category-button" type="button" value={buttons[i]} /></li>)

		return (
			<nav className="category">
				<ul>
					<li><Link to="/product"><input className="category-button" type="button" value={buttons[0]} /></Link></li>
					<li><input className="category-button" type="button" value={buttons[1]} /></li>
					<li><input className="category-button" type="button" value={buttons[2]} /></li>
					<li><input className="category-button" type="button" value={buttons[3]} /></li>
				</ul>
			</nav>
		)
	}

	finder() {
			return (
				<ProductConsumer>
					{(value)=>{
                    const {message} =value;
						return(
						<div className="find">
							<input className="search-box" type="text" placeholder={message} />
							<button className="search-button"><img src={finder}/></button>
						</div>

						)
					}}
				</ProductConsumer>
			)
		}
	render() {
		return 	(
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

