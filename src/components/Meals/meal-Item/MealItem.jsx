import React from 'react'
import styled from 'styled-components'

import {ReactComponent as PlusIcon } from "../../../assest/icons/plus.svg"
import { MealItemForm } from './MealItemForm'
export const MealItem = ({meal}) => {
  return (
     <Container>
    <StyletItemInfo>

      <StyleTitle>{meal.title}</StyleTitle>
      <p>{meal.describe}</p>
      <span>${meal.price}</span>
    </StyletItemInfo>
  
<MealItemForm id={'amount'+Math.random().toString()} />
   
   
   
  </Container>

  )
}

const Container=styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #D6D6D6;
  
margin-bottom: 20px;
:last-child{
  border: none;
  margin-bottom: o;
}

`
const   StyletItemInfo =styled.div`
margin-bottom: 20px;
p{
  font-weight: 600;
  font-size: 16px;
line-height: 24px;
margin: 0;
margin-top: 4px;
}
span{
  font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #AD5502;
margin-top: 4px;

}
  margin-bottom:20px ;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;

`
const StyleTitle=styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`
const StyleIcons=styled(PlusIcon)`
  margin-right: 10px;
`

const StyleInput=styled.input`
  width: 3.75rem;
  height: 2rem;
`