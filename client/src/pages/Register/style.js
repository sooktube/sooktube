import styled from 'styled-components'
import { MAIN } from '../Style/Main';

export const MainBackground = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: ${MAIN.BACKGROUND_COLOR};
`;

export const RegisterLogo = styled.div`
    font-size:5.1vh;
    width:30%; height:30%;
    position:absolute;
    top:10%; 
    margin-top:3%;
    margin-left:36%;
    margin-bottom:3%;
    padding:0px;
    font-weight:bold;
    color: ${MAIN.DARK_UI_COLOR};
`;

export const RegisterForm = styled.div`
    position:absolute;
    top:8%;
    width:50%;
    height:80%;
    left:25%;
`;

export const InputR = styled.input`
    /*width:396px; height:44px;*/
    margin-bottom:1px;
    top:70%;
    width:100%;
    height:55%;
`;

export const LabelName = styled.div`
    font-size:2vh;
    font-weight:bold;
    color: black;
    margin-bottom:5px;
    margin-top:5px;
`;

export const LabelName2 = styled.div`
    color:black;
    font-size: 1.5vh;
    margin-bottom:5.2px;
`;

export const FormGroupA = styled.div`
    position:absolute;
    top:17.5%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
    
`;
  
export const FormGroupB = styled.div`
    position:absolute;
    top:33%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
    
`;

export const FormGroupC = styled.div`
    position:absolute;
    top:48.5%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
    
`;

export const FormGroupD = styled.div`
    position:absolute;
    top:65%;
    margin-left: 25%;
    height:10%;
    width:45%;
    margin-top:7%;
    margin-bottom:5%;
    padding:0px;
   
`;

export const FormGroupE = styled.div`
    position:absolute;
    top:79.5%;
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
    background-color: ${MAIN.DARK_UI_COLOR};
    border: none;
    color: white;
    &:hover {
    background-color: #d35400;
  }
`;

export const InvalidFeedback = styled.div`
    color: red;
    font-size:2vh;
`;
