import styled from "styled-components";

const GlobalLayoutStyle = styled.div`
  width: 1728px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1536px) {
    width: 1200px;
  }
  @media (max-width: 1312px) {
    width: 912px;
  }
  @media (max-width: 944px) {
    width: calc(100% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }
`;

export default GlobalLayoutStyle;