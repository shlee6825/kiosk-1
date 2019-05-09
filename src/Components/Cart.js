import React, {Component} from 'react';
import CartTable from './CartTable'
import CartList from './CartList'

import {ProductConsumer} from "../context"

export default class Cart extends Component {
    render(){
        return(
            <div>
            <section id="cart">
            <div className="cart-top">
                <div className="cancel-button">
                    전체취소
                </div>
            </div>
            <div className="body">
                <div className="purchase-button" onClick={()=>console.log('안녕하세요')}>
                    결제하기
                </div>
            </div>
            </section>

      

            <ProductConsumer>
                {value=>{
                    const {cart}=value;   // 카트에 state를 집어넣는다
                    console.log('이건 카트',cart)
                    return (
                        <React.Fragment>
                            <CartTable/>
                            <CartList value={value}/>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
            </div>
      
        )
    }
}