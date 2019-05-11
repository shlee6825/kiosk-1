//개별 상품
// id를 받아서 그 상품의 내용을 써 주는 함수 만들어야함.
// quick view로 이동하는 버튼도 필요함. 
import {ProductConsumer} from '../context';
// import {ButtonContainer} from "./Button";
// import logo from '../logo.svg';
import magnifier from './css/finder.svg';

import React, {Component} from 'react';
import './css/style.css';
import PropTypes from 'prop-types'



export default class Product extends Component {
    ItemView() {
        const { id, title, img, price, viewOpen } = this.props.product;
        const fixid = id

        return (
            <ProductConsumer>
                {(value) => {
                    return (

                            <button className="item" 
                            disabled={viewOpen ? true : false}  
                            onClick={() => {
                                value.addToCart(id);
                                }}>
                                <div className="item-image" >
                                    <img src={img} className="item-image" />
                                </div>
                                <button className="lookdetail"
                                    onClick={() => {
                                        value.openView(fixid);
                                    }}>
                                    <img src={magnifier} />
                                </button>
                                <div className="description">
                                    <span className="name">{title}</span>
                                    <br />
                                    <span className="price">{price} 원</span>
                                </div>
                            </button>
                    )
                }}
            </ProductConsumer>
        )
    }



    render() {
        return (
            <div className="container">
                    {this.ItemView()}
            </div>
            )
        }
    }


			// <button className="item" onClick={()=>{
                // value.addToCart(id);
            // }}>
			// 	<div className="item-image" >
			// 		<img src={img} className="item-image"/>
			// 	</div>
            // 	<button className="lookdetail"                                    
            //  disabled={inCart ? true: false}
                                    // onClick={()=>{
                                        // value.openView(fixid); 
                                    // }}>
			// 		<img src={magnifier}/>
			// 	</button>
			// 	<div className="description">
			// 		<span className="name">{title}</span>
			// 		<br/>
			// 		<span className="price">{price} 원</span>
			// 	</div>
			// </button>

Product.propTypes={
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}