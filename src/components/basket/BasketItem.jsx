import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
export const BasketItem = ({title,price,amount}) => {
  return (
    < Container>
        <Title>{title}</Title>
        <Content>
            < PriceAmountContainer>
                <Price>{price}</Price>
                <Amount>x{amount}</Amount>
            </ PriceAmountContainer>
            <CounterContainer>
                <Button borderStyle="squared" variant='outlined' >-</Button>
                <Button borderStyle="squared" variant='outlined' >+</Button>
            </CounterContainer>
        </Content>
    </ Container>
  )
}

const Container =styled.div`
    padding:24px 0px;
    width: 100%;
`
const Title=styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 33px;
text-align: center;
color: #222222;
margin: 0;
`
const Price =styled.p`
     font-weight: 700;
    font-size: 20px;
    line-height: 33px;
    color: #8a2b06;
    margin: 0;
`

const Amount =styled.span`
border: 1px solid #c5c2c2;
border-radius:6px;
      font-weight: 600;
    font-size: 20px;
    line-height: 33px;
text-align: center;
color: #222222;
padding:6px 14px;
display: block;
`
const PriceAmountContainer=styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
`
const CounterContainer=styled.div`
&:first-child{
    margin-right: 14px;
}
  display:flex ;
  gap: 14px;

`
const Content=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`