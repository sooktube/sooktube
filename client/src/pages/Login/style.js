import styled from 'styled-components'
import { MAIN } from '../Style/Main';

export const MainBackground = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: ${MAIN.BACKGROUND_COLOR};
`;

export const LoginLogo = styled.div`
    font-size: 35px;
    width:200px; height:40px;
    position:fixed;
    top:35%; left:50.5%;
    margin-left:-100px;
    margin-top:-40px;
    padding:0px;
    color: ${MAIN.DARK_UI_COLOR};
    font-weight:bold;
    
`;

export const FormGroup1 = styled.div`
    position:absolute;
    top:40%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;

export const FormGroup2 = styled.div`
    position:absolute;
    top:52%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;

export const FormGroup3 = styled.div`
    position:absolute;
    top:60%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
    
`;

export const InputA = styled.input`
    width:396px; 
    height:44px;
`;

export const InvalidFeedback = styled.div`
    color: red;
    font-size: 10px;
`;

export const SubmitButton = styled.button`
    width:400px; 
    height:60px; 
    position:absolute;
    top:90%; 
    left:50%; 
    margin-left:0px; 
    padding:0px;
    background-color: ${MAIN.DARK_UI_COLOR};
    border: none;
    color: white;
    &:hover {
    background-color: #d35400;
  }
`;


export const Regbutton = styled.span`
    position:absolute;
    top:70%;
    left:54%;
    padding:0px;
`;
  
export const Regguide = styled.span`
    color:#f1c40f;
    position:absolute;
    top:70%;
    left:40%;
    padding:0px;
`;
