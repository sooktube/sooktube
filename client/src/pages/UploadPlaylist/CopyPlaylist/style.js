import styled from 'styled-components'
import { MAIN } from '../../../components/style/Main';
import {FaCheck} from "react-icons/all";

export const MainBackground = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:space-around;
	width:100%;
`;

export const UploadForm = styled.div`
  display:inline-block;
	flex-direction: column;
	width:450px;
`;

export const UploadLogo = styled.div`
	margin-top:9.9vh;
	font-size:4vh;
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	margin-top:4vh;
	display:flex;
	width:100%;
`;

export const UploadInput = styled.input`
  width: 0;
  height:0;
  overflow:hidden;
`;

export const NameInput=styled.span`
    display:inline;
	border:none;
	font-weight:bold;
	font-size:2.5vh;
	width: 10rem;
	margin-left:1em;
`;

export const InputTitle = styled.input`
	position:static;
	margin-top:20px;
	width: 415px;
	padding:7px;
	border:1px solid #ced4da;
	&:focus {
	  outline:1px solid ${MAIN.DARK_UI_COLOR};
	}
`;

export const InputDesc = styled.textarea`
	position:static;
	margin-top:2vh;
	width:415px;
	height:25vh;
	padding:7px;
	border:1px solid #ced4da; 
	&:focus {
	outline:1px solid ${MAIN.DARK_UI_COLOR};}
`;

export const Label = styled.label`
  padding: 0.3em 1em 0.5em 1em;
	background:  ${MAIN.BASE_COLOR};
	display:inline;
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
	display:block;
	margin-top:2.9vh;
	width:415px;
	height:4.6vh;
`;

export const PreviewImage = styled.img`
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
	height: 80%;
	margin-top: 5rem;
`;

export const TextCheck = styled.div`
  display:inline-block;
	margin-top:0.9vh;
	margin-left:35px;
	position:static;
	font-size:2.7vh;
	font-weight:bold;
	width:200px;
`;

export const TextCheck2 = styled.div`
  margin-left:35px;
	font-size:2.4vh;
	width:250px;
	color:#868e96;
	
`;

export const UploadButton = styled.button`
	background:  ${MAIN.BASE_COLOR};
	border-radius: 25px;
	color:white;
	float:right;
	padding: 1em;
	font-size: 2.3vh;
	border:none;
	&:hover {
    background-color: #80c2ea;
  }
`;

export const Check = styled(FaCheck)`
  width: 1.2rem;
  height: 1.5rem;
  color: forestgreen;
`;

export const ImageUploadLoading = styled.span`
	font-weight:bold;
	font-size: 1rem;
	height: 1rem;
	margin-left: 0.5rem;
	padding: 0.5rem;
`;

