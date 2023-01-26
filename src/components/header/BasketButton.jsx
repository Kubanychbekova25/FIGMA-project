import styled from "styled-components"
import{ReactComponent as BasketIcon}from "../../assest/icons/Basket-icons.svg"

const BasketButton =({count })=>{
return <StyleButton>
<BasketIcon/>
 <StyleTitle>Your Card </StyleTitle> 
 < StyledCount id="counter" >{count || 0}</ StyledCount>
</StyleButton>
}

export default BasketButton

const StyleButton=styled.button`
     background: #612109;
     border-radius: 20px;
     padding:10px 32px;
     font-weight: 600;
     font-size:16px ;
     color:#ffffff;
     line-height: 24px;
     border: none;
     display: flex;
        align-items:center ;
        cursor: pointer;

     &:hover{
        background-color: #2c0d00;
      
     }
     &:hover > #counter{
        background: #9e3107;
      
     }
     
     ;
     
     `
     const StyleTitle=styled.span`
        margin-left: 12px;
        margin-right: 24px;
     `
     const StyledCount=styled.span`
           background: #8a2b06;
     border-radius: 20px;
     padding:10px 32px;
     font-weight: 600;
     font-size:16px ;
     color:#ffffff;
     padding:4px 20px;
     `