import styled from 'styled-components';
import {FaRegUserCircle} from "react-icons/all";

export const UsernameWrapper = styled.div`
    font-size: 3vh;
    display: flex;
`;

export const Username = styled.div`
    color: white;
    padding: 0.5em 0 0 0.2em;
`;

export const UserIcon = styled(FaRegUserCircle)`
    height: 2em;
    width: 2em;
    border-radius: 50%;
    margin: 0 0.2em 0 0;
    color: white;
`;