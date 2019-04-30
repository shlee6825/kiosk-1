//전체 상품 리스트

import React, {Component} from 'react'
import Product from './Product'
import './css/style.css'
import Cart from './Cart'
// context의 내용을 받아옴(DB를 import)
import {ProductConsumer} from '../context';
 

export default class ProductList extends Component{
    render(){
        return(
            <React.Fragment>
            <section id="product">
            <div className="menu">
                Hello Menu {/*Title넣기 */}
            </div>
                <ProductConsumer> 
                    {value=>{
                        return value.products.map(product =>{
                            return <Product key={product.id} product=
                            {product}/>;
                        })
                    }}
                    
                </ProductConsumer>
            </section>   
            <Cart/>
            </React.Fragment>

      
        )
    };
}

