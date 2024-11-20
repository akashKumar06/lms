import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
  background-color: #000;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
