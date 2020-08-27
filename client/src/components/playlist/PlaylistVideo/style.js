import styled from 'styled-components';
import {MAIN} from "../../style/Main";

export const PlaylistVideoWrapper = styled.div`
   width: 58%;
   margin-top: 2rem;
   height: 51rem;
   border-radius: 15px;
   background-color: white;
   @media (max-width: 944px) {
    width: calc(100% - 1rem);
    }
`;

export const IsVideo = styled.div`
	color: ${MAIN.DARK_TEXT_COLOR};
	position: relative;
	font-size: 1.3rem;
	width: inherit;
	top:7%;
	text-align: center;
`;