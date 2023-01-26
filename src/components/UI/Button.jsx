import styled from "styled-components";


const Button = ({ children }) => {
  return <StyleButton>{children}</StyleButton>;
};

export default Button;

const StyleButton = styled.button`
  background: #612109;
  border-radius: 20px;
  padding: 10px 32px;
  font-weight: 600;
   font-size: 16px;
  color: #ffffff;
  line-height: 24px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #2c0d00;
  }
  &:active {
    background: #9e3107;
  }
`;
