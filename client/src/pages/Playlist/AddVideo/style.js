import styled from 'styled-components';
import {MAIN} from "../../../components/style/Main";
import search from "../../../../public/search.png";

export const AddVideoWrapper = styled.div`
    padding: 0;
	justify-content: center;
`;

export const SearchButton = styled.button`
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


export const SearchInput = styled.input`
	width: 70%;
	font-size: 1em;
	padding:0.5em 0.5em 0.5em 2em;
	border:1px solid gray;
	&, &:focus, &:after {
	  background-image: url(${search});
	  background-position: 0.5em 0.5em;
      background-size: 1em;
      background-repeat: no-repeat;  
	}
`;