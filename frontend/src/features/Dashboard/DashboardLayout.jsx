import { styled } from "styled-components";
import DashboardNav from "./DashboardNav";
import DashboardSidebar from "./DashboardSidebar";
const StyledDashBoardLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
  background-color: #000;
`;

const Main = styled.div`
  width: 100%;
  background-color: #202020;
  padding: 4px;
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 8px;
  background-color: #000;
`;

function DashboardLayout() {
  return (
    <StyledDashBoardLayout>
      <DashboardNav></DashboardNav>
      <Container>
        <DashboardSidebar></DashboardSidebar>
        <Main></Main>
      </Container>
    </StyledDashBoardLayout>
  );
}

export default DashboardLayout;
