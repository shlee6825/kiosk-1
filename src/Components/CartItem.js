import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { cartinc, cartdec, removeItem, cartTotal, clearCart } = value;
    console.log('여긴 카트아이템의 아이디', id)
    return (
        <div className="row my-1 text-capitalize text-center">

            <div className="col-20 mx-auto col-lg-3">
                <span className="d-lg-none"> product: </span>
                {title}
            </div>
            <div className="col-20 mx-auto col-lg-3">
                <span className="d-lg-none"> price : </span>
                {price}
            </div>
            <div className="col-20 mx-auto col-lg-2 my-2 my-lg-3">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => cartdec(id)}>-</span>
                        <span className="btn btn-black mx-1" >{count} </span>
                        <span className="btn btn-black mx-1" onClick={() => cartinc(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-20 mx-auto col-lg-3">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
                <div className="col-20 mx-auto col-lg-4">
                    <h5> 합계: {total}원</h5>
                </div>
            </div>
        </div>
    )
}

