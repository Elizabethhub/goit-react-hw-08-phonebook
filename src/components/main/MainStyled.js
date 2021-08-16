import styled from "styled-components";
import pic from "../../images/background-s.jpg";

export const MainContainer = styled.main`
  height: calc(100vh - 50px);
  background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${pic});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 40px;
  color: white;
  overflow: scroll;
`;
