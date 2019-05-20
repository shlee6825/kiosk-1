import React from 'react';
import CartItem from './CartItem'
//List 에 id를 넣어줍니다, value도 넣자 
export default function  CartList({value}) {
    const {cart} =value;
    console.log('CartList지롱',{cart})
        return(
            <div>
                {cart.map(item=>{
                     return <CartItem key={item.id} item={item} value={value}/> 
                })}
            </div>
        );
    }
