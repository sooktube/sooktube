import styled from 'styled-components';
import {FiPlusCircle} from "react-icons/all";
import {MAIN} from "../../../../components/style/Main";

export const AddVideoButtonWrapper = styled.div`
    margin: 0;
    padding-left: 2rem;
    span {
       font-size: 1.5rem;
       margin-left: 0.5em;
    }
`;

export const PlusButton = styled(FiPlusCircle)`
    color: ${MAIN.MAIN_THEME_COLOR};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;
