import React, {Component} from 'react';
import './css/style.css'


export default class Cart extends Component {
    render(){
        return(
            <section id="cart">
            <div className="cart-top">
                <div className="cancel-button">
                    전체취소
                </div>
            </div>
            <div className="body">
                <div className="purchase-button">
                    결제하기
                </div>
            </div>
        </section>
      
        )
    }
}