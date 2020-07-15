import styled from 'styled-components'
import { MAIN } from '../Style/Main';


export const RegisterLogo = styled.div`
    font-size: 34px;
    width:200px; height:40px;
    position:fixed;
    top:20%; left:50.5%;
    margin-left:-100px;
    margin-top:-40px;
    padding:0px;
    color: ${MAIN.BACKGROUND_COLOR};
    font-weight:bold;
`;

export const InputR = styled.input`
    width:396px; height:44px;
`;

export const LabelName = styled.div`
    font-size: 10.5pt;
    font-weight:bold;
    margin-bottom:5px;
`;

export const LabelName2 = styled.div`
    font-size: 9pt;
    margin-bottom:4.8px;
`;

export const FormGroupA = styled.div`
    position:absolute;
    top:30%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;
  
export const FormGroupB = styled.div`
    position:absolute;
    top:42%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;

export const FormGroupC = styled.div`
    position:absolute;
    top:54%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;

export const FormGroupD = styled.div`
    position:absolute;
    top:66%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;

export const FormGroupE = styled.div`
    position:absolute;
    top:78%;
    left:50%;
    margin-left:-200px;
    margin-top:-23px;
    padding:0px;
`;

export const Rsubmit = styled.button`
    width:400px; height:60px; position:absolute;
    top:90%; left:50%; margin-left:0px; padding:0px;
    background-color: #1E3A79;
    width:400px;
    border: none;
    color: white;
`;

export const InvalidFeedback = styled.div`
    color: red;
`;
