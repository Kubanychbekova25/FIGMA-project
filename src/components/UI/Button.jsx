import styled from "styled-components";


const Button = ({ children,variant='contained',borderStyle='rounder'}) => {
  return <StyleButton variant={variant} borderStyle={borderStyle} >{children}</StyleButton>;
};

export default Button;
const getBackgrondColor =(props)=>{
return props.variant==='contained' ? '#8a2b06':'#FFFF'
}
const getBorder =(props)=>{
  return props.variant==='contained' ? 'none': '1px solid #8a2b06 '
  }
  const getColor =(props)=>{
    return props.variant==='contained' ? '#FFF':' #8a2b06 '
    }
    const getBorderRadius =(props)=>{
      return props.borderStyle==='rounder' ? '20px':' 6px '
      }


const StyleButton = styled.button`
  background:${getBackgrondColor};
  border-radius: ${getBorderRadius};
  padding: 10px 32px;
  font-weight: 600;
   font-size: 16px;
  color:${getColor};
  line-height: 24px;
  border: ${getBorder};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #7e2a0a;
    color: #FFF;
  }
  &:active {
    background: #9e3107;
  }
`;
