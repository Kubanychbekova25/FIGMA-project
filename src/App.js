import "./App.css";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Meals from "./components/Meals/Meals";
import Summary from "./components/summary/Summary";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Basket />

        <Summary />
        <Meals />
      </div>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
