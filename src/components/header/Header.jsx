import styled from "styled-components"
import BasketButton from "../header/BasketButton"
const Header =()=>{
    return(
    <Container>
      <Logo>ReactMeals</Logo> 
      <BasketButton>
        
      </BasketButton>
        </Container>)
}
export default Header


const Container=styled.header`
position: fixed;
top: 0;
    width: 100%;
    height: 101px;
    background-color: #8A2B06;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding-left: 120px;
    padding-right: 120px;
    align-items:center;
`

const Logo =styled.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #ffffff;
    margin: 0;
`