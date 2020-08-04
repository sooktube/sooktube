import styled from 'styled-components'
import { MAIN } from '../../components/style/Main';
import search from "../../../public/search.png"

export const MainBackground = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:flex-start;
	width:100%;
`;

export const UploadForm = styled.div`
    display:inline-block;
	flex-direction: column;
	width:450px;
`;

export const UploadLogo = styled.div`
	margin-top:9.9vh;
    position:static;
	font-size:4vh;
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	position:static;
	margin-top:4vh;
    padding:2px;
	height:50px;
	width:100%;
`;

export const UploadInput = styled.input`
    position:static;
    width:0;
    height:0;
    overflow:hidden;
`;

export const NameInput=styled.span`
    display:inline;
    position:static;
	border:none;
	font-weight:bold;
	font-size:2.5vh;
	margin-left:1em;
`;

export const InputTitle = styled.input`
	position:static;
	margin-top:20px;
	width: 415px;
	padding:7px;
	border:1px solid #ced4da;
	&:focus {
	outline:1px solid ${MAIN.DARK_UI_COLOR};}
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
	position:static;
    padding: 0.5em 1em 0.5em 1em;
	background:  ${MAIN.MAIN_THEME_COLOR};
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

export const UploadBox2 = styled.div`
    position:relative;
	display:block;
	margin-top:0.5vh;
	width:330px;
`;

export const PreviewImage = styled.img`
	position:static;
`;

export const InputCheck = styled.input`
	position:static;
	display:inline-block;
	
	width:50px;
	font-size:50px;
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
	position:static;
	font-size:2.4vh;
	width:250px;
	color:#868e96;
	
`;

export const VideoAdd = styled.button`
	position:static;
	border:none;
	margin-top:0.5em;
	background:transparent;
	float:left;
	font-size:2.7vh;
	margin-bottom:0.5em;
	&:focus {
      outline: none;
    }
`;

export const UploadButton = styled.button`
	background:  ${MAIN.MAIN_THEME_COLOR};
	border-radius:3px;
	color:white;
	float:right;
	padding: 1em 1em 1em 1em;
	font-size: 2.3vh;
	border:none;
	&:hover {
    background-color: #80c2ea;
  }

`;


export const IsVideo = styled.div`
	position : static;
	margin-top:9.9vh;
	margin-left:8vw;
	color:#495057;
	display:inline-block;
	top:20%;
`;

export const VideoList = styled.div`
	display:inline-block;
	width:650px;
	height:100%;
	margin-left:27px;
	margin-top:40px;
	overflow-y:auto;
`;

export const VideoList2 = styled.div`
	display:inline-block;
	width:550px;
	height:250px;
	margin-top:13px;
	overflow-y:auto;
`;



export const AddBox = styled.div`
	margin: 20px auto;
    height: 50px;
`;

export const LinkInput = styled.input`
	width:280px;
	padding:0.5em;
	font-size:2.5vh;
	border:1px solid gray;
`;

export const SearchBox=styled.div`
	margin:20px auto;
	height:340px;
`;

export const SearchInput = styled.input`
	width:300px;
	font-size:17px;
	background-image: url(${search});
	background-position: 2.15vh 2.15vh;
	background-size: 10px;
    background-repeat: no-repeat;
	padding:0.5em 0.5em 10px 34px;
	border:1px solid gray;
`;

export const SearchButton = styled.button`
	margin-left:0.8em;
	background-color : ${MAIN.MAIN_THEME_COLOR};
	color:white;
	border:none;
	font-size:18px;
	padding:0.7em 0.5em 0.7em 0.5em;
	border-radius:3px;
	margin-bottom:19px;

	&:hover {
    background-color: #80c2ea;
  }
`;

export const AddButton = styled.button`
	margin-left:0.8em;
	background-color : ${MAIN.MAIN_THEME_COLOR};
	color:white;
	border:none;
	font-size:15px;
	padding:0.7em 0.5em 0.7em 0.5em;
	border-radius:3px;
	margin-top:5px;

	&:hover {
    background-color: #80c2ea;
  }
`;


export const VideoWrapper = styled.div`
    width:100%;
    padding:14px;
    border-bottom:1px solid #ced4da;
    border-top:1px solid #ced4da;
    display:flex;

`;

export const Video = styled.video`
    width:112px;
    height:63px;
    display:inline-block;
`;


export const VideoTitle = styled.div`
    font-weight:bold;
    margin-left:7px;
    margin-top:4px;
    font-size:3vh;
`;

export const S_VideoButton = styled.button`
    background:transparent;
    display:block;
    border:2px solid;
    border-color:${props => props.color};
    width:100%;
    &:focus {
      outline: none;
    }
    

`;

export const S_VideoWrapper = styled.div`
    width:100%;
    padding:5px;
    border-bottom:1px solid #ced4da;
    border-top:1px solid #ced4da;
    display:flex;

`;

export const S_VideoImage = styled.video`
    width:80px;
    height:45px;
    display:inline-block;
`;


export const S_VideoTitle = styled.div`
    font-weight:bold;
    margin-left:7px;
    margin-top:4px;
    font-size:2vh;
`;
