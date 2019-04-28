
// import React, {Component} from 'react';
// import {ProductConsumer} from '../context';
// import {ButtonContainer} from "./Button";
// import logo from '../logo.svg';


// export default class Productquickview extends Component{
//     render(){
        
//         return(
//             <ProductConsumer>
                
//                 {value => {
                    
//                     const {
//                         id, company, img, info, price, title, inCart
//                     } = value.detailProduct;
//                     console.log(value)

//                     return (
//                         <ButtonContainer
//                         disabled={inCart ? true: false}
//                         onClick={()=>{
//                             value.openView(id);

//                         }}>
                        
//                       <img src={logo}/>
                      
//                        상세 설명으로 가자
//                         </ButtonContainer>
//                     )
//                 }}
//             </ProductConsumer>
//         )
//     }
// }
