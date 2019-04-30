import React, { Component } from 'react';
import './css/style.css';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import finder from './css/finder.svg';
// import banner from './img/main.png';
// import dog from './img/dog_image.png';
// import { detailProduct, storeProducts } from '../data';

// class User extends Component {
// 	state = {
// 		home: true,
// 		category: null,
// 	}
// }

// function resetall() {
// 	this.setState({
// 		home: true,
// 		category: null,
// 	})
// }


// 해야할 일 - 버튼 스타일링 - navigator 버튼을 잘 생각해보자 - 집에 내가 만들어둔걸로 이용하면 될 듯? , 
export default class Header extends Component {
	state = {
		message: "검색어를 입력하세요",
	}

	navigator() {
		var buttons = ["상점", "의사추천", "죽자"," 섹스"]
		//for문 쓰니까 문법에 안맞는듯..? props 쓰는 규칙 떄문인듯

		return (
			<nav className="category">
				<ul>
					
				<li><Link to ="/product"><input className="category-button" type="button" value={buttons[0]} /></Link></li>
				<li><input className="category-button" type="button" value={buttons[1]} /></li>
				<li><input className="category-button" type="button" value={buttons[2]} /></li>
				<li><input className="category-button" type="button" value={buttons[3]} /></li>
			 </ul>
			</nav>
		)
	}

	finder() {
		return (
			<div className="find">
				<input className="search-box" type="text" placeholder={this.state.message} />
				<button className="search-button">
                <img src={finder} />
                이거뭐임
                </button>
		    </div>
		)
	}

	render() {
		return (
			<header id="header">
				<div className="title">
					<a className="big-title" href="index.html" type="button">동물병원 KIOSK</a>
					<br />
					<a className="small-title" href="index.html" type="button">Your Petshop Partner</a>
				</div>
				{this.navigator()}
				{this.finder()}
			</header>
		);
	}
}


export const HeaderButton = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent; 
    border:0.05rem solid var(--lightBlue);
    border-color:${props => props.cart?"(var--mainYellow)": "var(--lightBlue)"}
    color:${prop=> prop.cart? "var(--mainYellow)":"var(--lightBlue)"};
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;  
    cursor:pointer;
    margin:0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:${prop => prop.cart? "var(--mainYellow)": "var(--lightBlue)"};
    }
    &:focus{
        outline: none;
    }
`


