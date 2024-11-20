import styled from "styled-components";
import Container from "../../../components/Container";
import Body from "../../../components/Body";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaBuilding, FaCouch } from "react-icons/fa";
import { MdAssignmentAdd, MdBedroomChild } from "react-icons/md";
import Sidebar from "../../../components/Sidebar";

const Main = styled.div`
  width: 80%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
`;

const StudentOptions = [
  {
    name: "Occupancy",
    icon: <PiSquaresFourFill color="#00fff2" />,
  },
  {
    name: "Hostels",
    icon: <FaBuilding color="#00fff2" />,
  },
  {
    name: "Rooms",
    icon: <MdBedroomChild color="#00fff2" />,
  },
  {
    name: "Assigned",
    icon: <MdAssignmentAdd color="#00fff2" />,
  },
  {
    name: "Furniture",
    icon: <FaCouch color="#00fff2" />,
  },
];
function DashboardStudents() {
  return (
    <Body>
      <Sidebar options={StudentOptions} />
      <Main>
        <Container gridcolumn="1/3">Heelo</Container>
        <Container></Container>
        <Container></Container>
      </Main>
    </Body>
  );
}

export default DashboardStudents;
