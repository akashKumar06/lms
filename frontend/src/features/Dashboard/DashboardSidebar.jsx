import { styled } from "styled-components";

const StyledDashboardSidebar = styled.div`
  background-color: #202020;
  border-radius: 10px;
  padding: 4px;
`;

function DashboardSidebar() {
  return <StyledDashboardSidebar>Sidebar</StyledDashboardSidebar>;
}

export default DashboardSidebar;
