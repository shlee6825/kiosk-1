import React from 'react';


export default function  CartTable() {
        return(
            <div className="container-fluid text-center d-none d-lg-block">
                
                <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">quintity</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">reomve</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">total</p>
                </div>
                </div>
            </div>
        )
    }