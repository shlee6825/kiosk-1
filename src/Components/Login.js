import React, {Component} from 'react';
import styled from "styled-components";
import {ProductConsumer} from "../context"


export default class Login extends  Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                    const {openLogin, closeLogin} = value;
                    if(!openLogin){
                        return null;
                    }else{
                        return(
                            <div>안녕하세요</div>
                        )
                    }
                }}
            </ProductConsumer>
        );
    }
}


// 구현해야하는 것 1. 디자인 ( 전화번호 입력 하기, + 보안키? 시벌 뭔데)- 로그인+회원가입,,,
// 2. 지금 카트 안에 있는 것을 View로 보여주는 창이 있어야 할 것. 이것도 구현
//3.결제하기 창 , 목록 확인을 해줘야함..? 아 시발 이건 디자인 줘야지 솔직히...  