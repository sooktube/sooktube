import styled from "styled-components";
import {IoIosHeartDislike} from "react-icons/all";

export const DisrecommendWrapper = styled.div`
  display: flex;
  width: 50px;
  span {
    padding: 0.5em;
    width: 15px;
  }
`;

export const Disrecommend = styled(IoIosHeartDislike)`
    width: 35px;
    height: 25px;
    margin-right: 0.2em;
    cursor: pointer;
    color: ${props => props.on === -1 ? '#71A6C6' : '#cecece'}
`;