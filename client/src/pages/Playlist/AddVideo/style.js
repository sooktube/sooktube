import styled from 'styled-components';
import {MAIN} from "../../../components/style/Main";
import search from "../../../../public/search.png";

export const AddVideoWrapper = styled.div`
    margin: 20px auto;
	justify-content: center;
`;

export const AddButton = styled.button`
	margin-left:0.8em;
	background-color : ${MAIN.MAIN_THEME_COLOR};
	color:white;
	border:none;
	font-size:2.5vh;
	padding:0.7em 0.5em 0.7em 0.5em;
	border-radius:3px;
	&:hover {
    background-color: #80c2ea;
    }
`;

export const SearchBox=styled.div`
	margin:20px auto;
	height:300px;
`;

export const SearchInput = styled.input`
	width:280px;
	font-size:2.5vh;
	background-image: url(${search});
	background-position: 2.15vh 2.15vh;
	background-size: 10px;
    background-repeat: no-repeat;
	padding:0.5em 0.5em 0.5em 30px;
	border:1px solid gray;
`;