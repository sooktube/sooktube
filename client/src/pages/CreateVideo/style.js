import styled from 'styled-components'
import { MAIN } from '../../components/style/Main';

export const CreateVideoWrapper = styled.div`
    display: flex;
`;

export const InputVideoWrapper = styled.div`
    margin-top: 2em;
    padding: 0;
`;

export const UploadLogo = styled.div`
    font-size: 20px;
    margin-top: 5%;
    padding: 0;
	color: ${MAIN.MAIN_THEME_COLOR};
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	margin-top: 1em;
`;

export const UploadInput = styled.input`
    width:0;
    height:0;
    background-color: ${MAIN.MAIN_THEME_COLOR};
`;

export const VideoName = styled.span`
	border:none;
	font-weight:bold;
	font-size:2.5vh;
	margin-left: 1em;
`;

export const InputTitle = styled.input`
	padding:4px;
	margin-top: 1em;
	width: 100%;
	border:1px solid #ced4da;
	&:focus {
	    outline: 1px solid #ced4da;
    }
`;

export const InputDesc = styled.textarea`
	width: 100%;
	height: 200px;
	margin-top: 1em;
	border:1px solid #ced4da; 
	&:focus {
	    outline: 1px solid #ced4da;
    }
`;


export const Label = styled.label`
    padding: 0.5em 1em 0.5em 1em;
    margin-top: 0.7em;
	background-color: ${MAIN.MAIN_THEME_COLOR};
	border-radius: 30px;
	color: white;
	font-weight: 300;
	font-size: 2.4vh;
	transition: all 0.2s ease-in;
	cursor: pointer;
	outline: none;
	border: none;
	&:hover {
      background-color: ${MAIN.BRIGHT_ON_HOVER};
    }
`;

export const UploadButton = styled.button`
	background: ${MAIN.MAIN_THEME_COLOR};
	width: 80px;
	height: 25px;
	border-radius:30px;
	float: right;
	margin-top: 1em;
	color:white;
	font-size: 2.3vh;
	border:none;
	&:hover {
      background-color: ${MAIN.BRIGHT_ON_HOVER};
    }
`;

export const ThumbnailWrapper = styled.div`
    height: 30vh;
    width: 30vw;
`;

export const Thumbnail = styled.canvas`
    height: 30vh;
    width: 30vw;
`;