import styled from "styled-components";
import {FiHeart} from "react-icons/all";
import {MAIN} from "../../style/Main";

export const CardWrapper = styled.div`
    height: 25rem;
    width: 100%;
    display: flex;
    border-radius: 15px;
    background-color: white;
    box-shadow:  10px 10px 20px #d3d3d9, -12px -12px 20px #ffffff;
`;

export const CardImage = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 15px;
`;

export const CardInfo = styled.div`
   height: 100%;
   width: 50%;
`;

export const CardTitle = styled.div`
    margin-top: 1.5em;
    padding: 1.5em 1em 2em 1em;
    height: 3rem;
    font-size: 1.3rem;
    width: 100%;
    text-align: center;
    color: ${MAIN.DARK_TEXT_COLOR};
    font-weight: bold;
`;

export const CardDesc = styled.div`
    font-size: 1rem;
    margin-top: 1rem;
    height: 13.5rem;
    padding: 1em;
    line-height: 1.5em;
`;

export const Seperator = styled.div`
    margin: 1em auto 1em auto;
    height: 0.2em;
    width: 5em;
    background-color: ${MAIN.MAIN_THEME_COLOR}
`;


export const CardAuthor = styled.div`
    font-size: 1rem;
    font-family: Georgia, sans-serif;
    font-style: italic;
    padding: 1em;
    display: flex;
    justify-content: space-between;
`;
export const CardHeart = styled(FiHeart)`
    margin-right: 0.2em;
    width: 1em;
`;
