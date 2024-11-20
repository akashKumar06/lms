import styled from "styled-components";

const Container = styled.div`
  flex-grow: ${(props) => (props.flexgrow ? `${props.flexgrow}` : 1)};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  grid-column: ${(props) => (props.gridcolumn ? `${props.gridcolumn}` : "")};
  padding: 10px;
  background-color: #202022;
  border-radius: 10px;
`;

export default Container;
