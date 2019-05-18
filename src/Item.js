import React, { Component } from 'react';
import './style.css';

class Item extends Component{
	constructor(detail) {
		super();
		this.addcart = this.addcart.bind(this);

		this.state = {
			viewopen: false,
			incart: false,

			title: detail.title,
			img: detail.img,
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
				<img src={this.state.img} className="item-image"/>
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

export { Item };
export default updateCart;
