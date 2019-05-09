// 퀵뷰
//해야할일

//1. item 이름 디자인, 버튼 디자인
import React, {Component} from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context"
// context에서 열고 닫는거 정의

export default class Quickview extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {viewOpen, closeView} =value;
                    const {img, title, price,info} =value.viewProduct;

                    if(!viewOpen){
                        return null;
                    }
                    else{
                        return(
                            <ViewContainer onClick={()=>closeView()}>
                                {/*태영이한테 css파일 요구해야함 이 부분은 */}
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="view"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <img src={img} className="img-fluid" 
                                            alt="product"/>
                                            <h5>{title}</h5>
                                            <h6>{info} </h6>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            {/* Buttons */}

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

const ViewContainer= styled.div`
    width: 1080px;
    height: 1920px;
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