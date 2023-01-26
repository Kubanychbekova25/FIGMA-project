import styled from "styled-components"

const SummaryInfo=()=>{
    return (
        <Card>
            <StyleH1>Delicious Food, Delivered To You</StyleH1>
            <styledP>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
lunch or dinner at home.</styledP>
            <styledP>All our meals are cooked with high-quality ingredients, just-in-time and of course by
 experienced chefs!</styledP>
        </Card>
    )
}
export default SummaryInfo


const Card=styled.div`
    /* max-width: 53.375rem;
    background: #383838;
    padding: 36px 54 px;
    box-shadow: 0px 6px 16px rgb(0 , 0 ,0 ,0.3);
border-radius: 16px;
position: relative;
margin: -12rem auto;
color:white;
text-align: center;
font-weight: 500;
font-size: 1rem;
line-height: 24px; */

text-align: center;
  margin: -160px auto auto;
  background-color: #383838;
  border-radius: 14px;
  position: relative;
  box-shadow: 0 .0625rem 1.125rem .625rem rgb(0 0 0 / 25%);
  width: 854px;
  height: 270px;
  color: #fff;
  display: grid;
  align-items: center;
  padding: 1rem;

`


const StyleH1=styled.h1`
    color:#ffffff;
    padding: 1rem;

`

const styledP=styled.p`
       padding: 1rem;
`