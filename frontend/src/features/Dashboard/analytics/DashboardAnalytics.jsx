import styled from "styled-components";
import Container from "../../../components/Container";
import { SiGoogleanalytics } from "react-icons/si";
import { FaStore, FaUserGraduate, FaUsers } from "react-icons/fa";
import { VscRepo } from "react-icons/vsc";
import { GiMeal } from "react-icons/gi";
import Body from "../../../components/Body";
import Sidebar from "../../../components/Sidebar";

const Main = styled.div`
  width: 100%;
  padding: 4px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const analyticsOptions = [
  {
    icon: <SiGoogleanalytics color="#00fff2" />,
    name: "Analytics",
  },
  {
    icon: <FaUserGraduate color="#00fff2" />,
    name: "Students",
  },
  {
    icon: <VscRepo color="#00fff2" />,
    name: "Complaints",
  },

  {
    icon: <FaStore color="#00fff2" />,
    name: "Stock",
  },
  {
    icon: <FaUsers color="#00fff2" />,
    name: "Users",
  },
  {
    icon: <GiMeal color="#00fff2" />,
    name: "Meals",
  },
];

function DashboardAnalytics() {
  return (
    <Body>
      <Sidebar options={analyticsOptions} />
      <Main>
        <Container flexgrow={2} width="80%">
          Occupancy
        </Container>
        <Container flexgrow={1.5} width="80%">
          Fees Collection
        </Container>
        <Container flexgrow={1} width="80%">
          Complaints
        </Container>
      </Main>
    </Body>
  );
}

export default DashboardAnalytics;
