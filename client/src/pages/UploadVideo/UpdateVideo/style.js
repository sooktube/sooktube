import styled from 'styled-components'
import { MAIN } from '../../../components/style/Main';
import {FaCheck} from "react-icons/all";

export const CreateVideoWrapper = styled.div`
	display:flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width:100%;
`;

export const InputVideoWrapper = styled.div`
	align-self: center;
	display:inline-block;
	flex-direction: column;
	width:450px;
`;

export const VideoWrapper = styled.div`
    @media (max-width: 1919px) {
    width: calc(60% - 1rem);
    }
    @media (max-width: 1440px) {
    width: calc(50% - 1rem);
    }
    @media (max-width: 1312px) {
    width: calc(50% - 1rem);
    }
    @media (max-width: 944px) {
    width: calc(80% - 1rem);
    }
    @media (max-width: 767px) {
    width: calc(100% - 2rem);
    }
`;

export const UploadLogo = styled.div`
    font-size: 1.7rem;
    margin-top: 3rem;
    padding: 0;
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	margin-top: 1em;
`;

export const UploadInput = styled.input`
    width:0;
    height:0;
    background-color: ${MAIN.BASE_COLOR};
`;

export const VideoName = styled.span`
	font-weight:bold;
	font-size: 1rem;
	margin-left: 1em;
`;

export const Check = styled(FaCheck)`
    width: 1.2rem;
    height: 1.5rem;
    color: forestgreen;
`;

export const VideoUploadLoading = styled.span`
	font-weight:bold;
	font-size: 1rem;
	height: 1rem;
	margin-left: 0.5rem;
	padding: 0.5rem;
`;

export const UploadCheckWrapper = styled.div`
    height: 2rem;
    margin-top: 7rem;
    margin-bottom: 1rem;
    display: flex;
    vertical-align: middle;
`;

export const InputTitle = styled.input`
	margin-top:33px;
	width:450px;
	padding:7px;
	border:1px solid #ced4da;
	&:focus {
	    outline: 1px solid #ced4da;
    }
`;

export const InputDesc = styled.textarea`
	margin-top:2vh;
	width:450px;
	height:25vh;
	padding:7px;
	border:1px solid #ced4da; 
	&:focus {
	    outline: 1px solid #ced4da;
    }
`;

export const Label = styled.label`
    padding: 0.3em 1em 0.5em 1em;
	background:  ${MAIN.BASE_COLOR};
	border-radius: 30px;
	color: white;
	font-weight: 300;
	font-size: 1rem;
	transition: all 0.2s ease-in;
	cursor: pointer;
	outline: none;
	border: none;
	&:hover {
    background-color: ${MAIN.BRIGHT_ON_HOVER};
  }
`;

export const UploadButton = styled.button`
	background: ${MAIN.BASE_COLOR};
	float: right;
	margin-top: 1em;
	color:white;
	border-radius:3px;
	font-size: 1rem;
	padding: 0.8em 1em 0.8em 1em;
	border:none;
	&:hover {
      background-color: ${MAIN.BRIGHT_ON_HOVER};
    }
`;
