//전체 상품 리스트
import { storeProducts, detailProduct } from '../data';

import React, { Component } from 'react'
import Product from './Product'
import './css/style.css'
import Cart from './Cart'
// context의 내용을 받아옴(DB를 import)
import { ProductConsumer } from '../context';

// for문 쓰니까 error뜨는거 보니 버튼 나중에 하나하나 다 고쳐야할듯
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


    
    // IF 검색어 없으면 전부 랜더링, 아니면 일부만 랜더링, setstate와 디비를 한 번 더부르는다는 단점이 있음
    productContents() {
        return (
            <div className="box">
            <ProductConsumer>
                {value => {

                    if (value.message=="검색어를 입력하세요"){
                        return value.products.map(product => {
                            return <Product key={product.id} product=
                                {product} />;
                        })

                    }else{

                        const findProduct=[]
                        storeProducts.forEach((item)=>{
                            if(item.title.indexOf(value.message) >-1){
                                findProduct.push(item)


                            }
                        })


                        return findProduct.map(product =>{
                            return <Product key={product.id} product= {product} />
                        }) 

                    }
                    
                        
                }
            }
            {/* return value.currentItemList.map(product=>{
                            return <Product key={product.id} product={product}/>
                        }) */}


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

