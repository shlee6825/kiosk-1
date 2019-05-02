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
        cartTotal:0,
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

    // 누르면 Cart로 보냄,카트에 있으면 True, 등등 중요함
    addToCart=(id)=>{
        let tempProducts= [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index]
        product.count=1;
        const price= product.price;
        product.total=price;
        if( product.inCart ===false){
            product.inCart =true;
            this.setState(()=>{
                return {products: tempProducts, cart:[...this.state.cart, product]};
            }, 
            ()=>{this.addTotal()});
        }else{
            console.log('한번만 눌러라잉')
        }
        console.log('Addtocart인덱스',index)


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
    
    //Cart Item에 다 들어있음
    // 누르면 cart 갯수 증가, total은 갯수* 카트 가격
    cartinc=(id)=>{
        let tempCart= [...this.state.cart];
        const cartChoice= tempCart.find(item => item.id ===id);
        const index =tempCart.indexOf(cartChoice);

        const product = tempCart[index];
        product.count = product.count+1;
        product.total = product.count * product.price;
        this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotal()})
    }
    // 누르면 cart 갯수 감소, 0개 되면 카트에서 사라지게 함

    cartdec=(id)=>{
        let tempCart= [...this.state.cart];
        const cartChoice= tempCart.find(item => item.id ===id);
        const index =tempCart.indexOf(cartChoice);
        const product = tempCart[index];

        if (product.count!==1){
            product.count = product.count-1;
            product.total = product.count * product.price;
            this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotal()})

        }else{
            this.removeItem(id);
        }
    }
    // cart 아이템 하나씩만 제거( 휴지통 아이콘 )
    removeItem=(id)=>{
        let tempProducts= [...this.state.products];
        let tempCart= [...this.state.cart];

        tempCart=tempCart.filter(item => item.id !== id);
        const index= tempProducts.indexOf(this.getItem(id));
        let removeProduct= tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;
        this.setState(()=>{
            return{
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, ()=>{
            this.addTotal();
        })


        console.log('제거넣기');
    }
    // 전체 아이템 초기화 
    clearCart=()=>{
        this.setState(()=> {
            return {cart: []};
        },
        ()=>{
            this.setProducts();
            this.addTotal();
        })
    }
    //  Total 아이템 가격이 total 구함
    addTotal =() =>{
        let Total =0;
        this.state.cart.map(item =>(Total += item.total));
        this.setState(()=>{
            return{
                cartTotal:Total
            }
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