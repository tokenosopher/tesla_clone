import React, {useState} from 'react';
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {selectCars} from "../features/carSlice/carSlice"
import {useSelector} from "react-redux";

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(0)
    const cars = useSelector(selectCars)
    console.log(cars)

    return (
        <Container>
            <a>
                <img src={"/images/logo.svg"}/>
            </a>
            <Menu>
                {/*{this maps over the cars array that is stored in the reducer. If you want to see the 'clean code' before using the reducer, check out the git commits}*/}
                {cars && cars.map((car, index) =>
                    <a key={index} href={'#'}>{car}</a>
                )}
            </Menu>
            <RightMenu>
                <a href={"#"}>Shop</a>
                <a href={"#"}>Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href={"#"}>{car}</a></li>
                ))}
                <li><a href={"#"}>Used Inventory</a></li>
                <li><a href={"#"}>Trade-in</a></li>
                <li><a href={"#"}>Cybertruck</a></li>
                <li><a href={"#"}>Roadster</a></li>
                <li><a href={"#"}>Semi</a></li>
            </BurgerNav>
        </Container>
    )
}
export default Header;

//position: fixed means that the menu stays there even if you scroll down on the page.
//justify content: space-between makes it so that the code is on top.
//z-index: determines which elements are on top of which
const Container= styled.div`
       min-height: 60px;
       position: fixed;
       display: flex;
       align-items:center;
       justify-content: space-between;
       padding: 0 20px;
       top: 0;
       left: 0;
       right: 0;
       z-index: 10
`

// font weight changes the width of the font
const Menu= styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex: 1;
 
 a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap
 }
 
 @media(max-width: 768px) {
    display: none;
 }
 
`

const RightMenu=styled.div`
 display: flex;
 align-items: center;

 a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
 
 }
`

//so we've basically imported the MenuIcon this way into the project.
const CustomMenu=styled(MenuIcon)`
    cursor: pointer;
`

//how to position: use top, bottom, right, left
//props.show translate x - you can use that to move the menu away from sight. TranslateX(100%) means moving the navbar 100%
//transition: for transitions for transform.
const BurgerNav=styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    right:0;
    background: white;
    width:300px;
    list-style:none;
    padding:20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2)
        }
    a {
        font-weight: 600;
    }
`

const CustomClose=styled(CloseIcon)`
    cursor: pointer;
`

// //create a styled div for the close wrapper so that the close icon is on the right
// const CloseWrapper=styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     padding: 10px;
// `

//the way that it was done in the tutorial.
const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`