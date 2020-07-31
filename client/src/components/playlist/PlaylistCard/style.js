import styled from "styled-components";
import {FiHeart} from "react-icons/all";

export const CardWrapper = styled.div`
    height: 34vh;
    width: 12vw;
    box-shadow:
            -2px 0 -1px black,
            -4px 0 -2px black,
            -6px 0 -3px black,
            -8px 0 -4px black,
            -10px 0 -5px black;
    &:hover {
        transform: perspective(500px) rotateY(0deg);
        box-shadow: none;
    }
    background-color: #fff;
`;

export const CardImg = styled.img`
    height: 25vh;
    width: inherit;
    margin: 0;
    display: inline-block;
    border: 0.4em solid #fff;
`;

export const CardInfo = styled.div`
    padding: 0.5em 0 0 0;
    height: 7vh;
`;

export const CardTitle = styled.div`
    width: 5em;
    padding-left: 0.2em;
`;

export const CardDesc = styled.div`
    width: 5em;
`;
export const CardHeart = styled(FiHeart)`
    margin: -3em 0 0 10vw;
    width: 1em;
`;
