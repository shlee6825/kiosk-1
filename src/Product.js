import React, { Component } from 'react';
import './style.css';

import updateCart, { Item } from './Item.js';
import banner from './img/main.png';
import { detailProduct, storeProducts } from './data.js';

class Product extends Component {
	menu() {
		var buttons = ["강아지", "고양이", "당나귀", "개미", "치타", "사료", "장난감", "진화의돌"]

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

export { Product };
