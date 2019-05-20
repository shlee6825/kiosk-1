import React from 'react';


export default function  CartTable() {
        return(
         
            <div className="container-fluid text-center d-none d-lg-block">
                
                <div className="row">
                <div className="col-10 mx-left col-lg-2">
                <p className="text-uppercase">사진</p>
                </div>
                <div className="col-10 mx-left col-lg-2">
                <p className="text-uppercase">상품명</p>
                </div>
                <div className="col-10 mx-left col-lg-2">
                <p className="text-uppercase">가격</p>
                </div>
                <div className="col-10 mx-left col-lg-2">
                <p className="text-uppercase">수량</p>
                </div>

                <div className="col-10 mx-left col-lg-2">
                <p className="text-uppercase">취소</p>
                </div>
                <div className="col-10 mx-left col-lg-2">
                <p className="text-uppercase">총 수량</p>
                </div>
                </div>
            </div>
        )
    }
    
// import './css/style.css'


// <section id="cart">
// <div className="cart-top">

//     <div className="cancel-button" onClick={()=> clearCart(id)}>
//         전체취소
//     </div>
// </div>
// <div className="body">
//     <div className="purchase-button">
//         결제하기
//     </div>
// </div>            
// </section>