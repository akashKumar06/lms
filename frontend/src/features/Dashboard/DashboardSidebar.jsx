import { FaStore, FaUserGraduate, FaUsers } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { VscRepo } from "react-icons/vsc";
import { styled } from "styled-components";

const StyledDashboardSidebar = styled.div`
  background-color: #202020;
  border-radius: 10px;
  padding: 4px;
`;

const MenuContainer = styled.div`
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
function DashboardSidebar() {
  return (
    <StyledDashboardSidebar>
      <MenuContainer>
        <SiGoogleanalytics color="#00fff2" />
        <MenuLabel>Analytics</MenuLabel>
      </MenuContainer>
      <MenuContainer>
        <FaUserGraduate color="#00fff2" />
        <MenuLabel>Students</MenuLabel>
      </MenuContainer>
      <MenuContainer>
        <VscRepo color="#00fff2" />
        <MenuLabel>Complaints</MenuLabel>
      </MenuContainer>
      <MenuContainer>
        <FaStore color="#00fff2" />
        <MenuLabel>Stock</MenuLabel>
      </MenuContainer>
      <MenuContainer>
        <FaUsers color="#00fff2" />
        <MenuLabel>Users</MenuLabel>
      </MenuContainer>
      <MenuContainer>
        <GiMeal color="#00fff2" />
        <MenuLabel>Meals</MenuLabel>
      </MenuContainer>
    </StyledDashboardSidebar>
  );
}

export default DashboardSidebar;
