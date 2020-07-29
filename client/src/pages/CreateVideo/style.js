import styled from 'styled-components'
import { MAIN } from '../../components/style/Main';

export const CreateVideoWrapper = styled.div`
	background:#ffffff;
	display:inline-block;
	width:100%;
	
`;

export const InputVideoWrapper = styled.div`
    padding: 0;
	width: 30vw;
	display:inline-block;
	

`;

export const VideoWrapper = styled.div`
	width:20vw;
	padding:0.1px;
	margin-left:3em;
	display:inline-block;
`;

export const UploadLogo = styled.div`
    font-size:4vh;
    margin-top:9.9vh;
    padding: 0;
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
	margin-top: 1.5em;
	width: 100%;
	padding:5px;
	border:1px solid #ced4da;
	&:focus {
	    outline: 1px solid #ced4da;
    }
`;

export const InputDesc = styled.textarea`
	width: 100%;
	height: 200px;
	margin-top: 1em;
	padding:5px;
	border:1px solid #ced4da; 
	&:focus {
	    outline: 1px solid #ced4da;
    }
`;


export const Label = styled.label`
    padding: 0.3em 1em 0.5em 1em;
	background:  ${MAIN.MAIN_THEME_COLOR};
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
	float: right;
	margin-top: 1em;
	color:white;
	border-radius:3px;
	font-size: 2.3vh;
	padding: 0.8em 1em 0.8em 1em;
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