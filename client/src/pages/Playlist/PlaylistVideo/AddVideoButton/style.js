import styled from 'styled-components';
import {FaPlus} from "react-icons/all";
import {MAIN} from "../../../../components/style/Main";

export const AddVideoButtonWrapper = styled.div`
    margin-top: 2rem;
    padding-left: 2rem;
`;

export const AddVideoComment = styled.span`
    color: ${MAIN.DARK_TEXT_COLOR};
    position: relative;
    top: 0.1rem;
    font-size: 1.2rem;
    margin-left: 0.2em;
`;


export const PlusButton = styled(FaPlus)`
    color: ${MAIN.MAIN_THEME_COLOR};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &:hover {
      color: ${MAIN.BRIGHT_ON_HOVER}
    }
`;