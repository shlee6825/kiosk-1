// 전역 변수를 하위 파일로 보내기 위해서 만듦 (ex db 변경값 등) 
//하위에 파일에 직접 전달하고 받음! 더 효율적인 API
// Consumer 은 컴포넌트에 context 사용할 때 필요

import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();
// db에 해당 상품이 없는 경우 inCart:False
// state에 DB에 있는 상품목록, 상세 상품 내용을 입력, 이벤트 발생시 바꾸기 위해 setstate이용
class ProductProvider extends Component{
    state={
        products: [], //모든 db의 item이 들어가 있습니다.  
        detailProduct: detailProduct, // 특정 item만 불러오고 싶다
        cart:[],
        viewOpen: false ,
        viewProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }

    // Data에서 상품 정보 가져옴
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem] //    
        })
        this.setState(()=>{console.log('set state',tempProducts)
            return {products:tempProducts} //db에 있는 모든 product를 넣음
        });
    }
    getItem=(id)=>{
        
        const product = this.state.products.find(item => item.id ===id)
        console.log(product)
        return product;
    } //id를 넣어주면 그 상품을 내놓음, id는 무엇일까? 


    // detailProduct를 무엇인지 정의해줍니다. 
    handleDetail=(id) =>{
        console.log('핸들',id)
        const product= this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    }
    addToCart=(id)=>{
        let tempProducts= [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
        product.inCart =true;
        product.count=1;
        const price= product.price;
        product.total=price;
        this.setState(()=>{
            return {products: tempProducts, cart:[...this.state.cart, product]};
        }, ()=>{console.log(this.state)
        });
    }
    // Open quickview
    openView = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {viewProduct: product, viewOpen:true}
        })
    }
    closeView =() =>{
        this.setState(()=>{
            return {viewOpen : false}
        })
    }
    
    //Cart
    cartinc=(id)=>{
        console.log('카트에 넣기');
    }
    
    cartdec=(id)=>{
        console.log('카트에 넣기');
    }
    removeItem=(id)=>{
        console.log('제거넣기');
    }
    clearCart=()=>{
        console.log('모두제거')
    }
    render(){
        return(
        /*provide value는  value의 값들을 자식들에게 전해줌 */
        <ProductContext.Provider value={{  
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openView: this.openView,
                closeView: this.closeView,
                cartinc: this.cartinc,
                cartdec: this.cartdec,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}

            </ProductContext.Provider>            
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};