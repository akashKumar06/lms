import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: #202020;
  border-radius: 10px;
  padding: 4px;
`;

const MenuContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 14px 14px 14px 35px;
  gap: 15px;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    background-color: #2e2e2e;
  }
`;

const MenuLabel = styled.div`
  color: #fff;
`;
function Sidebar({ options }) {
  return (
    <StyledSidebar>
      {options.map((option) => (
        <MenuContainer
          key={option.name}
          to={`/dashboard/${option.name.toLowerCase()}`}
        >
          {option.icon}
          <MenuLabel>{option.name}</MenuLabel>
        </MenuContainer>
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
