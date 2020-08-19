import styled from 'styled-components';
import search from "../../../../../public/search.png";
import {MAIN} from "../../../style/Main";

export const SearchVideoWrapper = styled.div`
    margin: 2em auto;
    height: 30rem;
    text-align:center;
    overflow: auto;
`;

export const SearchInput = styled.input`
	width: 90%;
	font-size: 1.5em;
	padding:0.5em 0.5em 0.5em 2em;
	border:1px solid gray;
	&, &:focus, &:after {
	  background-image: url(${search});
	  background-position: 0.5em 0.65em;
      background-size: 1em;
      background-repeat: no-repeat;  
	}
`;

export const SearchComment = styled.div`
    div {
        font-size: 1.2em;
        margin-top: 1em;
        line-height: 1.2em;
        color: ${MAIN.DARK_TEXT_COLOR};
    }
`;
