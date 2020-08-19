import styled from 'styled-components';
import search from "../../../../public/search.png";

export const SearchVideoWrapper = styled.div`
    margin: 2em auto 1em auto;
    text-align:center;
    overflow: auto;
`;

export const SearchInput = styled.input`
	width: 90%;
	font-size: 1.5em;
	padding:0.5em 0.5em 0.5em 2.5em;
	border: 1.5px solid #e5e5e5;
	border-radius: 15px;
	&, &:focus, &:after {
	  background-image: url(${search});
	  background-position: 1em 0.65em;
      background-size: 1em;
      background-repeat: no-repeat;  
	}
`;

