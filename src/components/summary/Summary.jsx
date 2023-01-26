import styled from "styled-components";
import Image from "../../assest/image/summaryImage.jpg"

import SummaryInfo from "../summary/SummaryINfo";
const Summary = () => {
  return (
    <Container>
      <StyledImg src={Image} alt="summary" />
      <SummaryInfo />
    </Container>
  );
};
export default Summary;

const Container = styled.div`
  height: 527px;
`;
const StyledImg = styled.img`
  width: 100%;
`;
