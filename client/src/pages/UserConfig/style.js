import styled from 'styled-components'
import {MAIN} from "../../components/style/Main";
import img from "../../../public/defaultProfile.png";
import {TiDelete} from "react-icons/all";

export const MainBackground = styled.div`
    height: 450px;
`;

export const RegisterForm = styled.div`
    top:50%;
    left: 50%;
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
    margin-top: 3em;
`;

export const DeleteButton = styled(TiDelete)`
    margin-top: -0.1em;
    width: 1.3em;
    height: 1.3em;
`;

export const InputR = styled.input`
    position: static;
`;

export const LabelName = styled.div`
    font-size:2vh;
    font-weight:bold;
    color: #212529;
    margin-bottom:5px;
    margin-top:5px;
`;

export const LabelName2 = styled.div`
    color: #212529;
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
    margin: 0; 
    padding: 0;
    background-color: ${MAIN.BASE_COLOR};
    border: none;
    color: white;
    &:hover {
      background-color: ${MAIN.BRIGHT_ON_HOVER};
    }
    &:focus {
      outline: none;
    }
`;

export const InvalidFeedback = styled.div`
    color: red;
    font-size: 1.5vh;
    margin-top: 0.2em;
`;

export const LabelBox = styled.div`
    display: flex;
	align-items: center;
    justify-content: center; 
    flex-direction:column;
    width:100%;
`;

export const Label = styled.label`
    padding: 5em 1em 0.1em 1.4em;
    background-image : url(${props => props.img!=null ? props.img : img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width:90px;
    height:90px;
	border-radius:45px;
    color: black;
	font-weight: 400;
	font-size: 1rem;
	transition: all 0.2s ease-in;
	cursor: pointer;
	outline: none;
	border: none;
`;

export const UploadInput = styled.input`
    width:0;
    height:0;
    background-color: ${MAIN.MAIN_THEME_COLOR};
`;

export const AddText =  styled.div`
    margin-top: 0.5em;
    font-size: 2vh;
    font-weight:bold;
    display: flex;
`;