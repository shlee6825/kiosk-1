import React, { Component } from 'react';
import './style.css';

import finder from './img/finder.svg';
import banner from './img/main.png';
import dog from './img/dog_image.png';
import { detailProduct, storeProducts } from './data.js';

class User extends Component {
	state = {
		home: true,
		category: null,
	}
}

function resetall() {
	this.setState({
		home: true,
		category: null,
	})
}

class Header extends Component {
	state = {
		message: "검색어를 입력하세요",
	}

	navigator() {
		var buttons = ["상점", "의사추천", "니미", "씨발"]

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

class Item extends Component{
	constructor(detail) {
		super();
		this.addcart = this.addcart.bind(this);

		this.state = {
			viewopen: false,
			incart: false,

			title: detail.title,
			price: detail.price,
			info: detail.info,
		}
	}

	quickview() {
		return (
			<div className="quickview"> Hello Quickview </div>
		)
	}

	addcart() {
		if (!this.state.incart) {
			this.state.incart = true;
			let title = this.state.title;
			let price = this.state.price;

			updateCart(title, price);
		}
	}

	render() {
		return (
			<button className="item" onClick={this.addcart}>
				<img src={dog} className="item-image"/>
				<div className="description">
					<div className="name">{this.state.title}</div>
					<div className="price">{this.state.price}</div>
				</div>
			</button>
		)
	}
}

function updateCart(title, price) {
	this.setState({
		totalcost: this.state.totalcost + price,
		cartlist: this.state.cartlist.concat(<div><li> {title} {price} </li></div>),
	})
}

class Cart extends Component {
	constructor(props) {
		super(props);
		updateCart = updateCart.bind(this);

		this.state = {
			totalcost: 0,
			cartlist: [],
		}
	}

	render() {
		return (
			<section id="cart">
				<div className="cart-top">
					<div> 전체가격: {this.state.totalcost} </div>
					<input className="cancel-button" type="button" value="전체취소" />
				</div>
				<div className="body">
					<ul> {this.state.cartlist} </ul>
					<input className="purchase-button" type="button" value="결제하기"/>
				</div>
			</section>
		)
	}
}

class Product extends Component {
	menu() {
		var buttons = ["니미", "씨발", "좆같네", "엠창", "씨발년", "개새끼", "뒤져라", "병신"]

		var menus = []
		for (let i = 0; i < buttons.length; i++)
			menus.push(<li><input className="menu-button" type="button" value={buttons[i]} /></li>)
		
		return (
			<nav className="menu">
				<ul> {menus} </ul>
		    </nav>
		)
	}

	product_item() {
		var items = []
		for (let i = 0; i < 9; i++)
			items.push(new Item(storeProducts[i]).render())

		return (
			<div className="container"> {items} </div>
		)
	}

	render() {
		if (true) {
			return (
				<section id="product">
					{this.menu()}
					{this.product_item()}
				</section>
			)
		}
		else {
			return (
				<section id="product">
					{this.menu()}
					<img className= "main-commerce" src={banner} />
				</section>
			)
		}
	}
}

export { Header, Product, Cart };
