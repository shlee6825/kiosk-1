import React from 'react';

export default function CartItem({item, value}) {
    const{id,title,img, price,total, count}= item;
    const {cartinc, cartdec, removeItem, cartTotal, clearCart}=value;
    console.log('여긴 카트아이템의 아이디',id)
    return(
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                src={img}
                style={{width:"5rem", height: "5rem"}}
                className="img-fluid"
                alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>cartdec(id)}>-</span>
                        <span className="btn btn-black mx-1" >{count} </span>
                        <span className="btn btn-black mx-1" onClick={()=>cartinc(id)}>+</span>
                    </div>
                </div>
            </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=> removeItem(id)}>
                    <i className="fas fa-trash"/>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong> item total: ${total}</strong>
                </div>

            </div>
            <div>
                    <strong>모든 가격의 합은?: ${cartTotal}</strong>
                </div>
                <div className="cart-??" onClick={()=> clearCart(id)}>
                    <i className="fas fa-trash"/> 모든것을 제거한다
                </div>

            
        </div>
    )
}