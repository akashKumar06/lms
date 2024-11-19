import { styled } from "styled-components";
import { MdOutlineBedroomChild, MdOutlineDashboard } from "react-icons/md";
import NavButton from "../../components/NavButton";
import { FaClipboardList } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import Logo from "../../components/Logo";
import NavMenu from "../../components/NavMenu";

const StyledDashboardNav = styled.div`
  background-color: #202020;
  grid-column: 1/2;
  display: flex;
`;

const NavContainer = styled.div`
  padding-top: 25px;
  display: flex;
  flex-grow: 1;
  gap: 20px;
`;

function DashboardNav() {
  return (
    <StyledDashboardNav>
      <Logo />
      <NavContainer>
        <NavButton>
          <MdOutlineDashboard />
          Dashboard
        </NavButton>
        <NavButton>
          <MdOutlineBedroomChild />
          Rooms
        </NavButton>
        <NavButton>
          <FaClipboardList />
          Attendence
        </NavButton>
        <NavButton>
          <AiOutlineDollar />
          Accounts
        </NavButton>
        <NavButton>
          <GrHostMaintenance />
          Maintanace
        </NavButton>
      </NavContainer>
      <NavMenu />
    </StyledDashboardNav>
  );
}

export default DashboardNav;
