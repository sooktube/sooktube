import styled from 'styled-components';
import search from "../../../../public/search.png";

export const SearchVideoWrapper = styled.div`
    margin: 2em auto;
    text-align:center
`;

export const SearchInput = styled.input`
	width: 90%;
	font-size: 1.5em;
	padding:0.5em 0.5em 0.5em 2em;
	border:1px solid gray;
	&, &:focus, &:after {
	  background-image: url(${search});
	  background-position: 0.5em 0.5em;
      background-size: 1em;
      background-repeat: no-repeat;  
	}
`;