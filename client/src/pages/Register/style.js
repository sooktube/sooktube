import styled from 'styled-components'
import img from '../../../public/vid.jpg';

export const MainBackground = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-image : url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
`;


export const RegisterForm = styled.div`
    position:absolute;
    top:8%;
    width:66%;
    height:80%;
    left:17%;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
    
`;

export const RegisterLogo = styled.div`
    position:static;
    font-size: 5.2vh;
    display: flex;
	align-items: center;
	justify-content: center; 
    padding:0px;
    color: #071b6a;
    font-weight:bold;
    margin-top:1em;
`;

export const InputR = styled.input`
    position: static;
`;

export const LabelName = styled.div`
    font-size:2vh;
    font-weight:bold;
    color: #071b6a;
    margin-bottom:5px;
    margin-top:5px;
`;

export const LabelName2 = styled.div`
    color: #071b6a;
    font-size: 1.5vh;
    margin-bottom:5.2px;
`;

export const FormGroupA = styled.div`
    position:static;
    margin-top:1em;
    
`;
  
export const FormGroupB = styled.div`
    position:static;
    margin-top:1em;
    
`;

export const FormGroupC = styled.div`
    position:static;
    margin-top:1em;
    
`;

export const FormGroupD = styled.div`
    position:static;
    margin-top:1em;
`;

export const FormGroupE = styled.div`
    position:static;
    margin-top:1.6em;
    margin-bottom:1em;
    
`;

export const Rsubmit = styled.button`
    width:100%; 
    height:40px; 
    border-radius:20px;
    position:static; 
    margin-left:0px; 
    padding:0px;
    background-color: #071b6a;
    border: none;
    color: white;
    &:hover {
    background-color: #0929a9;
  }
`;

export const InvalidFeedback = styled.div`
    color: red;
    font-size:2vh;
`;
