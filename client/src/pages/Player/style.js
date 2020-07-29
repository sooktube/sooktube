import styled from 'styled-components'
import img from '../../../public/vid.jpg';
import VideoPlayer from "../../components/common/VideoPlayer";

export const MainBackground = styled.div`
    background:#ffffff;
`;

export const VideoBox = styled.div`
    margin-top:1%;
    width: 40%;
`;

export const VideoTitle = styled.div`
    margin-top:1em;
    font-size: 3vh;
    font-weight:600;
`;

export const VideoDesc = styled.div`
    margin-top:1em;

`;

export const line = styled.hr`
    border:1px;
`;

export const CommentBox = styled.div`
    width:80%;
    margin-top:2%;
    background:#ffffff;
    display:block;
    padding-top:1%;
`;

export const CommentContainer= styled.div`
    width:70%;
    display:float;
    flex-direction:row;
    margin-top:1em;
    margin-bottom:1em;
    text-align:left;
    vertical-align:top;
    padding:1vh;
`;

export const CommentTitle = styled.div`
    position:static;
    font-size:2.6vh;
    font-weight:550;
    margin-bottom:1em;
    
`;

export const Photo = styled.img`
    width:5vh;
    height:5vh;
    border-radius:2.5vh;
`;

export const TextBox = styled.div`
    margin-left:1.5em;

`;

export const Username = styled.div`
    position:static;
    font-weight:500;
    font-size:2.2vh;
    margin-bottom:0.5em;
    color:gray;
`;

export const Text = styled.div`
    font-size:2.5vh;
`;