import styled from "styled-components";

const StyledNavButton = styled.div`
  // width: 300px; /* Adjust as needed */
  // height: 200px; /* Adjust as needed */
  /* box-sizing: border-box;
  width: 100px;
  background-color: #000; */
  border-radius: 15px 15px 0 0;
  clip-path: polygon(4% 0, 96% 0, 100% 100%, 0% 100%);
  /* margin-top: 15px;
  padding: 4px;
  text-align: center;
  color: #fff; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 14px;
  color: #e4e4e4;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
function NavButton({ children }) {
  return <StyledNavButton>{children}</StyledNavButton>;
}

export default NavButton;
