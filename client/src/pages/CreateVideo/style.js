import styled from 'styled-components'
import { MAIN } from '../Style/Main';

export const VideoUploadWrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: #fff;
	align-items: center;
	justify-content: center;


`;

export const FileInfo = styled.span`
    font-size: 2vh;
`;

export const UploadForm = styled.div`
    background: #fff;
	box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);
	position: absolute;
	border-radius: 10px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 10px auto;
	transition: all 0.3s ease-in;
    top:30%;
    width:40%;
    height:40%;
    margin-left:30%;
`;

export const UploadLogo = styled.div`
    font-size:4vh;
    height:20%;
    position:absolute; 
    top:5%; 
    margin-top:3%;
    margin-left:31%;
    margin-bottom:3%;
    padding:0px;
    color: #3f4257;
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	position:absolute; 
	top:10%; 
	margin-top:3%;
    margin-left:31%;
    margin-bottom:3%;
    padding:0px;

`;



export const UploadInput = styled.input`
    position:absolute;
    width:0;
    height:0;
    overflow:hidden;
`;

export const TitleInput = styled.input`
    position: relative;
    height:5vh;
    width:30vw;
`;

export const DescInput = styled.textarea`
    position:absolute;
    width:0;
    height:0;
    overflow:hidden;
`;

export const ButtonUpload = styled.button`
    padding: 6px 23px;
	background: #3f4257;
	border-radius: 30px;
	color: white;
	font-weight: 300;
	font-size: 14px;
	margin: 10px 0;
	transition: all 0.2s ease-in;
	cursor: pointer;
	outline: none;
	border: none;
    position : absolute;
    top:45%;
`;

export const Label = styled.label`
    padding: 6px 23px;
	background: #3f4257;
	border-radius: 30px;
	color: white;
	font-weight: 300;
	font-size: 14px;
	margin: 10px 0;
	transition: all 0.2s ease-in;
	cursor: pointer;
	outline: none;
	border: none;

`;

export const InputTitle = styled.input`
	position:absolute;
	margin-left:30%;
`;
