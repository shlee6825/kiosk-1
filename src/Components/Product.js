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
        const {id, title, img, price, inCart} = this.props.product;
        const fixid= id
        return(
                <div className="container">
                    <div className="item">
                        <div className="image">
                        {/*버튼 스타일링으로 예쁘게 바꿀 수 있음
                        ,나중에 링크 어디에 줄 지 잘 만들어야함*/}
                        <ProductConsumer>
                            {(value) => {
                                return (
                                    <div>
                                    <ButtonContainer
                                    // 버튼 누르면 id가 나와야함 즉 detailproduct가 id에의해 변경
                                    disabled={inCart ? true: false}
                                    onClick={()=>{
                                        value.openView(fixid); //viewOpen을 true, id의 정보를 viewproduct에넣음, 동시에 두갠 안됨quickview랜더링됩니다.
                                    }}>
                                <img src={logo}/>
                                상세 설명으로 가자
                                    </ButtonContainer>

                                    {/* 이건 상품을 카트에 넣는 부분 */}
                                    <button onClick={()=>{
                                        value.addToCart(id);
                                    }}>
                                    <img src={img}  className='image_area'/>

                                    <div className="description">
                                        <div className="name">{title}</div>
                                        <div className="price">{price}</div>
                                    </div>
                                    </button>
                                    </div>
                                )
                            }}
                        </ProductConsumer>
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