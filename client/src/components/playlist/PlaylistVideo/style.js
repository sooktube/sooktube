import styled from 'styled-components';
import {MAIN} from "../../style/Main";

export const PlaylistVideoWrapper = styled.div`
   width: 58%;
   margin-top: 2rem;
   min-height: 45rem;
   border-radius: 15px;
   background-color: white;
   @media (max-width: 944px) {
    width: calc(100% - 1rem);
   }
`;

export const IsVideo = styled.div`
	color: ${MAIN.DARK_TEXT_COLOR};
	font-size: 18px;
	position: relative;
	top: 40%;
	text-align: center;
`;