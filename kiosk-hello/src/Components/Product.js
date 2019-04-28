//개별 상품
// id를 받아서 그 상품의 내용을 써 주는 함수 만들어야함.
// quick view로 이동하는 버튼도 필요함. 
import {ProductConsumer} from '../context';
import {ButtonContainer} from "./Button";
import logo from '../logo.svg';

import React, {Component} from 'react';
import './css/style.css';
import PropTypes from 'prop-types'


export default class Product extends Component {
    render(){
        const {id, title, img, price, inCart} = this.props.product; /*여긴 문제없어 */
        console.log('상품목록', id, title, img, price, inCart)
        return(
                <div className="container">
                    <div className="item">
                        <div className="image">
                        {/*버튼 스타일링으로 예쁘게 바꿀 수 있음
                        ,나중에 링크 어디에 줄 지 잘 만들어야함*/}
                        <ProductConsumer>
                
                        {value => {
                            
                            const {
                                id, company, img, info, price, title, inCart
                            } = value.detailProduct;
                            console.log('값이다',value) //이 부분으로 값이 전달이 안됨. 이부분 해결
        
                            return (
                                <ButtonContainer
                                disabled={inCart ? true: false}
                                onClick={()=>{
                                    value.openView(id);
        
                                }}>
                                
                              <img src={logo}/>
                              
                               상세 설명으로 가자
                                </ButtonContainer>
                            )
                        }}
                    </ProductConsumer>
        
                        </div>
                        <img src={img}  className='image_area'/>

                        <div className="description">
                            <div className="name">{title}</div>
                            <div className="price">{price}</div>
                        </div>
                    </div>
                </div>
             )
    }
}


Product.propTypes={
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}