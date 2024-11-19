import { FaCircle } from "react-icons/fa";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
`;
const H2 = styled.h2`
  margin-left: 10px;
  color: #fff;
`;
function Logo() {
  return (
    <StyledLogo>
      <FaCircle color="#00fff5" /> <H2>HMS</H2>
    </StyledLogo>
  );
}

export default Logo;
