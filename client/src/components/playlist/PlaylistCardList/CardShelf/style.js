import styled from 'styled-components';
import {FiHeart} from "react-icons/all";

export const ShelfWrapper = styled.div`
    padding-top: 4vh;
    text-align: center;
    height: 45vh;
    overflow: hidden;
`;

export const CardWrapper = styled.div`
    display: inline-block;
    position: relative;
    height: 34vh;
    width: 12vw;
    margin-left: 0.5em;
    margin-bottom:5.4vh;
    z-index: 2;
    transform: perspective(500px) rotateY(22deg);
    transition: all 0.2s ease;
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
    &:hover{
        cursor:pointer;
    }
`;

export const CardInfo = styled.div`
    position: relative;
    padding: 0.5em 0 0 0;
    height: 7vh;
`;

export const likeCount = styled.div`
    width: 5em;
    margin-top:2.9vh;
    margin-left:10px;
    float:right;
`;

export const CardTitle = styled.div`
    width: 5em;
    padding-left: 0.2em;
    float:left;
`;


export const CardHeart = styled(FiHeart)`
    margin: -3em 0 0 10vw;
    width: 1em;
`;

export const Shelf = styled.div`
    width: 90%;
    margin: 1em auto;
    height: 3vh;
    z-index: 3;
    background-color: #dfdfdf;
`;


