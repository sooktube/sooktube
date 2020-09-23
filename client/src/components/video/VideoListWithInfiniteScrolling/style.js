import styled from 'styled-components';
import {MAIN} from "../../style/Main";

export const VideoListWrapper = styled.main`
    padding: 1rem;
    border-radius: 15px;
    overflow-x: hidden;
    width: 100%;
    background-color: #fff;
`;

export const NoResultComment = styled.div`
  font-size: 16px;
  margin: 1em;
  color: ${MAIN.DARK_TEXT_COLOR};
`;
