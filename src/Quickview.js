// 퀵뷰

import React, {Component} from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context"
import {ButtonContainer} from "./Button";
// context에서 열고 닫는거 정의

export default class Quickview extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {viewOpen, closeView} =value;
                    const {img, title, price} =value.viewProduct;


                    if(!viewOpen){
                        return null;
                    }
                    else{
                        return(
                            <ViewContainer>
                                {/*태영이한테 css파일 요구해야함 이 부분은 */}
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="view"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>item added to the cart</h5>
                                            <img src={img} className="img-fluid" 
                                            alt="product"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            {/* Buttons */}
                                                <ButtonContainer onClick={()=>closeView()}>
                                                    Back to Product
                                                </ButtonContainer>
                                                <ButtonContainer product onClick={()=>closeView()}>
                                                    이건 카트에 넣기
                                                </ButtonContainer>


                                        </div>
                                    </div>
                                </div>
                            </ViewContainer>

                        )
                    }

                }}
            </ProductConsumer>
        )
    }
}

const ViewContainer = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flew;
    align-items: center;
    justify-content: center;
    #view{
        background: var(--mainWhite); 
    }
`
// 색은 나중에 index에서 디자
