import styled from 'styled-components'
import {MAIN} from "../../components/style/Main";

export const MainBackground = styled.div`
    margin: 20px auto;
    height: 340px;
`;

export const LoginBox = styled.div`
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
    padding:0;
    color: ${MAIN.MAIN_THEME_COLOR};
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
    padding:0;
    margin-top:2em;
    margin-left:1em;
    margin-right:1em;
   
`;

export const FormGroup3 = styled.div`
    position:static;
    padding: 0;
    margin: 2em 1em 1em;
    
`;

export const FormGroup4 = styled.div`
    position:static;
    padding:0;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
    margin: 1em;    
`;

export const InputA = styled.input`
    position: static;
`;

export const InvalidFeedback = styled.div`
    color: red;
    margin-top: 0.5em;
    font-size: 10px;
`;

export const SubmitButton = styled.button`
    width:100%; 
    height:40px; 
    position:static; 
    margin: 0;
    padding: 0.5em 1em 0.5em 1em;
    background-color: ${MAIN.MAIN_THEME_COLOR};
    border: none;
    color: white;
    border-radius:20px;
    font-size:2.4vh;
    &:hover {
      background-color: #83c4eb;
    }
    &:focus {
      outline: none;
    }
`;

export const Regguide = styled.span`
    color:#ffd43b;
    padding:0;
    font-size:2.5vh;
    margin-right:1em;
    margin-left:1em;
`;

export const Regbutton = styled.span`
    padding:0;
    color: #071b6a;
    font-size:2.5vh;
    margin-left:1em;
    margin-right:1em;
`;
  

