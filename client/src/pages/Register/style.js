import styled from 'styled-components'
import { MAIN } from '../Style/Main';


export const RegisterLogo = styled.div`
    font-size:5vh;
    width:30%; height:30%;
    position:absolute;
    top:15%; 
    margin-top:3%;
    margin-left:35%;
    margin-bottom:3%;
    padding:0px;
    color: ${MAIN.BACKGROUND_COLOR};
    font-weight:bold;
`;

export const RegisterForm = styled.div`
    position:absolute;
 
    top:10%;
    width:50%;
    height:80%;
    left:25%;
`;

export const InputR = styled.input`
    /*width:396px; height:44px;*/
    margin-bottom:1px;
    top:70%;
    width:100%;
    height:50%;
`;

export const LabelName = styled.div`
    font-size:2vh;
    font-weight:bold;
    margin-bottom:5px;
    margin-top:5px;
`;

export const LabelName2 = styled.div`
    font-size: 1.5vh;
    margin-bottom:4.8px;
`;

export const FormGroupA = styled.div`
    position:absolute;
    top:25%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:5%;
    margin-bottom:5%;
    padding:0px;
    
`;
  
export const FormGroupB = styled.div`
    position:absolute;
    top:35%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
    
`;

export const FormGroupC = styled.div`
    position:absolute;
    top:48%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
    
`;

export const FormGroupD = styled.div`
    position:absolute;
    top:61%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
   
`;

export const FormGroupE = styled.div`
    position:absolute;
    top:74%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
    
`;

export const Rsubmit = styled.button`
    position:absolute;
    height:100%;
    width:100%;
    margin-left:0px; 
    padding:0px;
    background-color: #1E3A79;
    border: none;
    color: white;
`;

export const InvalidFeedback = styled.div`
    color: red;
`;
