//전체 상품 리스트

import React, { Component } from 'react'
import Product from './Product'
import './css/style.css'
import Cart from './Cart'
// context의 내용을 받아옴(DB를 import)
import { ProductConsumer } from '../context';


export default class ProductList extends Component {
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

    //Each item
    productContents() {
        return (
            <div className="box">
            <ProductConsumer>
                {value => {
                    return value.products.map(product => {
                        return <Product key={product.id} product=
                            {product} />;
                    })
                }}

            </ProductConsumer>
            </div>

        )
    }

    render() {

        return (
            <React.Fragment>
                <section id="product">

                    {this.menu()}
                    {this.productContents()}
                </section>
                <Cart />
            </React.Fragment>


            )
        };
    }

