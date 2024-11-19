import { FaCircle, FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { SiGooglecalendar } from "react-icons/si";
import styled from "styled-components";

const StyledNavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  width: 250px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f2f2f;
  padding: 8px;
  border-radius: 100%;
  cursor: pointer;
`;
function NavMenu() {
  return (
    <StyledNavMenu>
      <IconContainer>
        <SiGooglecalendar color="#fff" size={20} />
      </IconContainer>
      <IconContainer>
        <IoIosNotifications color="#f8eb38" size={20} />
      </IconContainer>
      <IconContainer>
        <FaUser color="#00fff5" size={20} />
      </IconContainer>
    </StyledNavMenu>
  );
}

export default NavMenu;
