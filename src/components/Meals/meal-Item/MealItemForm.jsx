import React from "react";
import Button from "../../UI/Button";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assest/icons/plus.svg";
export const MealItemForm = ({ id }) => {
  return (
    <StyledForm>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input type="number"
         min={1}
          max={5}
         defaultValue={1} 
         id={id}>
          
         </input>
      </Container>
      <Button>
        {" "}
        <PlusIcon />
        Add
      </Button>
    </StyledForm>
  );
};

const Container = styled.div`
  margin-bottom: 15px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }
  input {
    width: 60px;

    border: 1px solid #d6d6d6;
    border-radius: 6px;
    height: 2rem;
    outline: none;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
