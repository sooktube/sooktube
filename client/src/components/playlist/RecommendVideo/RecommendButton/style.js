import styled from "styled-components";
import {IoIosHeart} from "react-icons/all";

export const RecommendWrapper = styled.div`
  display: flex;
  width: 50px;
  span {
    padding: 0.5em;
    width: 15px;
  }
`
export const Recommend = styled(IoIosHeart)`
    width: 35px;
    height: 25px;
    margin-right: 0.2em;
    cursor: pointer;
    color: ${props => props.on === 1 ? '#71A6C6' : '#cecece'}
`;