import styled from 'styled-components';
import search from "../../../../public/search.png";
import {IoIosHeart, IoMdHeartDislike} from "react-icons/all";
import {MAIN} from "../../style/Main";

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
      outline: none;
	}
`;

export const SearchComment = styled.div`
    div {
        font-size: 13px;
        margin-top: 1em;
        line-height: 1.2em;
        color: ${MAIN.DARK_TEXT_COLOR};
    }
`;

export const Like = styled(IoIosHeart)`
    width: 1em;
    height: 1em;
    color: ${MAIN.BASE_COLOR};
`;

export const Dislike = styled(IoMdHeartDislike)`
    width: 1em;
    height: 1em;
    color: ${MAIN.BASE_COLOR};
`

export const InvalidSearchFeedback = styled.div`
    margin-top: 1.5rem;
    font-size: 13px;
    color: ${MAIN.DARK_TEXT_COLOR};
`;
