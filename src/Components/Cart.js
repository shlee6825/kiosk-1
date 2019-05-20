import React, { Component } from 'react';
import CartTable from './CartTable'
import CartList from './CartList'
import card from './css/card.svg'
import { ProductConsumer } from "../context"

export default class Cart extends Component {

    cartTop() {
        return (
            <ProductConsumer>
                {(value) => (
                    <div className="cart-top">

                        <div className="orderlist">
                            <span className="title">주문내역</span>
                            <span className="count">수량(개)</span>
                            <span>{value.cartnum}개</span>
                            <span className="price">금액(원)</span>
                            <span> {value.cartTotal}원</span>
                        </div>
                        <div className="cancel-button" onClick={() => value.clearCart(value.id)}>
                            전체취소
                        </div>
                    </div>

                )}

            </ProductConsumer>

        )
    }
    cartBody() {
        return (
            <ProductConsumer>
                {(value) => (
                    <div className="body">
                    <div className="purchase-box">
                    <CartList value={value} />
                    </div>


                        <div className="purchase-button" onClick={() => console.log('안녕하세요 새로운 퀵뷰입니다.')}>
                            결제하기
                        </div>
                    </div>
                )}

            </ProductConsumer>
        )

    }

    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        return (
                            <React.Fragment>
                                <section id="cart">
                                    <this.cartTop />
                                    <this.cartBody />
                                </section>
                            </React.Fragment>
                        )
                    }}
                </ProductConsumer>
            </div>

        )
    }
}