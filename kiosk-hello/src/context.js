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
        products: [], 
        detailProduct: detailProduct,
        cart:[],
        viewOpen: false ,
        viewProduct: detailProduct,
    }

    // Data에서 상품 정보 가져옴
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
    
        })
        this.setState(()=>{
            return {products:tempProducts} //products 에 지금 products를 넣어줌
        });
    }
    //이부분이 문젠 것 같은데.. 왜 계속 item id를 못가져옴?
    getItem=id=>{
        const product = this.state.products.find(item => item.id ===id)
        console.log('gteItem', product)
        return product;
    }

    // handle이건 아직 노필요
    handleDetail=(id) =>{
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
        }, ()=>{console.log(this.setate)
        });
    }
    // Open quickview ?? 왜 안되지? - id로 가져오잖...? 
    openView = (id)=>{
        console.log('id', id)
        const product = this.getItem(id);
        console.log('퀵뷰열기', product)
        this.setState(()=>{
            return {viewProduct: product, viewOpen:true}
        })
    }
    closeView =() =>{
        this.setState(()=>{
            return {viewOpen : false}
        })
    }
    

    render(){
        return(
        /*provide value는  value의 값들을 자식들에게 전해줌 */
        <ProductContext.Provider value={{  
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openView: this.openView,
                closeView: this.closeView
            }}>
                {this.props.children}

            </ProductContext.Provider>            
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};