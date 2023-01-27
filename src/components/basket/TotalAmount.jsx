import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
export const TotalAmount = ({price,onClose,onOrder}) => {
    const orderButton = price>0 ? <Button onClick={onOrder} variant="contained" >Order</Button>:null
const fixedPrice=price.toFixed(2)

  return (
    <div>
        <InfoContainer>
        <Label>Total amount</Label>
        <Price>${price}</Price>
        </InfoContainer>
        
        <ActionButtonContainer>
            <Button onClick={onClose}  variant="outline" >Close</Button>
           {price > 0 && <Button onClick={onOrder} variant="contained" >Order</Button>}
        </ActionButtonContainer>
    </div>
  )
}


const Label=styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 33px;
text-align: center;
color: #222222;
margin:0;

`
const Price=styled.p`
         font-weight: 700;
    font-size: 20px;
    line-height: 33px;
    color: #8a2b06;
    margin: 0;
`

const ActionButtonContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top:24px ;
    gap: 1rem;
`

const InfoContainer=styled.div`
    display: flex;
    justify-content: space-between;
   
`
