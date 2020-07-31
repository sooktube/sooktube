import styled from "styled-components";
import {FiHeart} from "react-icons/all";
import { MAIN} from "../../style/Main";

export const CardWrapper = styled.div`
    width: 100%;
    height: 60%;
    padding: 2em;
    border: 1px solid ${MAIN.BORDER_COLOR};
    background-color: #fff;
`;

export const CardImg = styled.img`
    height: 80%;
    width: inherit;
    margin: 0;
    border: 0.4em solid #fff;
`;

export const CardInfo = styled.div`
    height: 7vh;
`;

export const CardTitle = styled.div`
    width: 5em;
`;

export const CardDesc = styled.div`
    width: 5em;
`;
export const CardHeart = styled(FiHeart)`
    float: right;
    width: 1em;
`;
