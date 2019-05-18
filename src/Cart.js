import React, { Component } from 'react';
import './style.css';

import { Item } from './Item.js';
import updateCart from './Item.js';

class Cart extends Component {
	constructor(props) {
		super(props);
		var update  = updateCart.bind(this);

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

export { Cart };
