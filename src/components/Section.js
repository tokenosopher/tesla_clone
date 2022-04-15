import React from 'react';
import styled from "styled-components"

const Section = ({title, description, leftBtnText, rightBtnText, backgroundImg}) => {

    return (
        // you can actually pass the image in the styled component
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1> {title}</h1>
                <p> {description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {/*if the right button text exists only then show the right button*/}
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src={"/images/down-arrow.svg"}/>
            </Buttons>
        </Wrap>
    )
}
export default Section;

//flex direction - column means we're going to put them from top to bottom
//what? You can do backticks within backticks? Sweet brah.
const Wrap= styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //for vertical alignment; does equal amount of space between items, unless changed.
    align-items: center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")` }
    `

const ItemText=styled.div`
    padding-top: 15vh;
    text-align: center;
`
//display flex allows you to stack from left to right.
//for screens smaller that 768 pixels, you go flex-direction: column, which makes it a column.
const ButtonGroup=styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
    flex-direction: column;
    }
`

const LeftButton=styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer; //this turns the way that the mouse displays when you hover above the button to a pointer.
    margin: 8px;
    `
//this allows you to inherit all of the styles of the left button
const RightButton=styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s
`

const Buttons = styled.div``

