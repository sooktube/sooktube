import styled from "styled-components";
import {FiHeart} from "react-icons/all";
import {MAIN} from "../../style/Main";

export const CardWrapper = styled.div`
    height: 25rem;
    width: 100%;
    display: flex;
    border-radius: 15px;
    background-color: white;
    box-shadow:  15px 15px 20px #e1e1e3, -15px -15px 27px #ffffff;
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
    padding: 1em;
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
    padding: 1em;
    line-height: 1.5em;
`;

export const Seperator = styled.div`
    margin: 2em auto 1em auto;
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
