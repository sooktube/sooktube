import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { MAIN } from '../Style/Main';


export const LoginLogo = styled.div`
    font-size: 34px;
    width:200px; height:40px;
    position:fixed;
    top:35%; left:50.5%;
    margin-left:-100px;
    margin-top:-40px;
    padding:0px;
    color: ${MAIN.BACKGROUND_COLOR};
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

export const InvalidFeedback = styled.div`
    color: red;
    font-size: 10px;
`;

export const SubmitButton = styled.button`
    width:400px; height:60px; position:absolute;
    top:90%; left:50%; margin-left:0px; padding:0px;
    background-color: #1E3A79;
    border: none;
    color: white;
`;


export const Regbutton = styled.span`
    position:absolute;
    top:70%;
    left:54%;
    padding:0px;

`;
  
export const Regguide = styled.span`
    position:absolute;
    top:70%;
    left:40%;
    padding:0px;
`;

export const InputA = styled.input`
    width:396px; height:44px;
`;