import styled from 'styled-components'
import { MAIN } from '../../components/Style/Main';
import img from '../../../public/vid.jpg';

export const MainBackground = styled.div`
    margin: 20px auto;
`;

export const LoginBox = styled.div`
    margin: 0;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
    margin-bottom: 1em;
`;

export const LoginLogo = styled.div`
    position:static;
    font-size:5.2vh;
    display: flex;
	align-items: center;
	justify-content: center;
    width:60%; 
    padding:0px;
    color: #071b6a;
    font-weight:bold;
    margin-top:1em;
    
`;

export const FormGroup1 = styled.div`
    position:static;
    padding:0px;
    margin-top:2em;
    margin-left:1em;
    margin-right:1em;
    
`;

export const FormGroup2 = styled.div`
    position:static;
    padding:0px;
    margin-top:2em;
    margin-left:1em;
    margin-right:1em;
   
`;

export const FormGroup3 = styled.div`
    position:static;
    padding:0px;
    margin-top:2em;
    margin-bottom:1em;
    margin-left:1em;
    margin-right:1em;
    
`;

export const FormGroup4 = styled.div`
    position:static;
    padding:0px;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
    margin-top:1em;
    margin-bottom:1em;
    margin-left:1em;
    margin-right:1em;    
`;

export const InputA = styled.input`
    position: static;
`;

export const InvalidFeedback = styled.div`
    color: red;
    font-size: 10px;
`;

export const SubmitButton = styled.button`
    width:100%; 
    height:40px; 
    position:static; 
    margin-left:0px; 
    padding: 0.5em 1em 0.5em 1em;
    background-color: #071b6a;
    border: none;
    color: white;
    border-radius:20px;
    font-size:2.4vh;
    &:hover {
    background-color: #0929a9;
  }
`;

export const Regguide = styled.span`
    color:#f1c40f;
    color:white;
    padding:0px;
    font-size:2.5vh;
    margin-right:1em;
    margin-left:1em;
`;

export const Regbutton = styled.span`
    padding:0px;
    font-size:2.5vh;
    margin-left:1em;
    margin-right:1em;
`;
  

