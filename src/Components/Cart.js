import React, {Component} from 'react';
import CartTable from './CartTable'
import CartList from './CartList'
import card from './css/card.svg'
import {ProductConsumer} from "../context"

export default class Cart extends Component {

    cartTop(){
        return(
            <div className="cart-top">
                <div className="cancel-button">
                    전체취소
                </div>
            </div>

        )
    }
    cartBody() {
		return (
            
            <div className="body">
                <div className="purchase-button" onClick={()=>console.log('안녕하세요 새로운 퀵뷰입니다.')}>
                    결제하기
                </div>
            </div>
            
		// 	<div className="body">
        //     <ul> {this.state.cartlist} </ul>
        //     <button className="purchase-button" onClick={this.updateCart}>
        //         <img src={card} />
        //         <br/>
        //         <br/>
        //         결제하기
        //     </button>
        // </div>
        )
        
    }

    render(){
        return(
            <div>
            <section id="cart">
            <this.cartTop/>
            <this.cartBody/>
            </section>

      

            <ProductConsumer>
                {value=>{
                    const {cart}=value;   // 카트에 state를 집어넣는다
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