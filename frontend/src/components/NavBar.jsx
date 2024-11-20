import styled from "styled-components";
import Logo from "./Logo";
import NavButton from "./NavButton";
import { MdOutlineBedroomChild, MdOutlineDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { GrHostMaintenance } from "react-icons/gr";
import NavMenu from "./NavMenu";

const StyledNavbar = styled.div`
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

function NavBar() {
  return (
    <StyledNavbar>
      <Logo />
      <NavContainer>
        <NavButton to="/dashboard">
          <MdOutlineDashboard />
          Dashboard
        </NavButton>
        <NavButton to="/rooms">
          <MdOutlineBedroomChild />
          Rooms
        </NavButton>
        <NavButton to="/attendence">
          <FaClipboardList />
          Attendence
        </NavButton>
        <NavButton to="/accounts">
          <AiOutlineDollar />
          Accounts
        </NavButton>
        <NavButton to="/maintanance">
          <GrHostMaintenance />
          Maintanace
        </NavButton>
      </NavContainer>
      <NavMenu />
    </StyledNavbar>
  );
}

export default NavBar;
