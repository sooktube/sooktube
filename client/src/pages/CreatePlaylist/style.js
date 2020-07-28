import styled from 'styled-components'
import { MAIN } from '../../components/Style/Main';


export const MainBackground = styled.div`
    background: #fff;
`;



export const UploadForm = styled.div`
    display:flex;
	justify-content: center;
	flex-direction: column;
`;

export const UploadLogo = styled.div`
	margin-top:9.9vh;
    position:static;
	font-size:4vh;
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	position:static;
	margin-top:7vh;
    padding:2px;
	height:15%;
	width:30%;
`;

export const UploadInput = styled.input`
    position:absolute;
    width:0;
    height:0;
    overflow:hidden;
`;

export const NameInput=styled.input`
	border:none;
	font-weight:bold;
	position:absolute;
	left:60%;
	top:23%;
	font-size:2.5vh;
	height:54%;
	background:transparent;
`;

export const InputTitle = styled.input`
	position:static;
	margin-top:8vh;
	width:30vw;
	height:6%;
	padding:5px;
	border:1px solid #ced4da;
	&:focus {
	outline:1px solid ${MAIN.DARK_UI_COLOR};}
`;

export const InputDesc = styled.textarea`
	position:static;
	margin-top:2vh;
	width:30vw;
	height:25vh;
	padding:5px;
	border:1px solid #ced4da; 
	&:focus {
	outline:1px solid ${MAIN.DARK_UI_COLOR};}
`;


export const Label = styled.label`
    padding: 0.5em 1em 0.5em 1em;
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
    background-color: #80c2ea;
  }


`;

export const UploadBox = styled.div`
    position:relative;
	margin-top:2vh;
	padding:1vh;
	width:30vw;
`;


export const VideoAdd = styled.button`
	position:static;
	border:none;
	background:transparent;
`;

export const UploadButton = styled.button`
	background:  ${MAIN.MAIN_THEME_COLOR};
	border-radius:3px;
	color:white;
	position:absolute;
    right:0.2vw;
	padding: 1em 1em 1em 1em;
	font-size: 2.3vh;
	border:none;
	&:hover {
    background-color: #80c2ea;
  }

`;


export const IsVideo = styled.div`
	position : absolute;
	color:#495057;
	top:23%;
	left:58%;
`;

export const VideoBackground = styled.div`
	position : absolute;
	background-color: #f1f1f1;
	left:43%;
	width:57%;
	height:100%;

`;
