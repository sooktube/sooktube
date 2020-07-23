import styled from 'styled-components'
import { MAIN } from '../Style/Main';
import img from '../Style/vid.jpg';

export const MainBackground = styled.div`
    background-image : url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
    min-width: 100vw;
    min-height: 100vh;
`;
