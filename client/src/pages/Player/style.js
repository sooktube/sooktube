import styled from 'styled-components'
import img from '../../../public/vid.jpg';

export const MainBackground = styled.div`
    background-image : url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
`;

export const VideoBox = styled.video`
    display:block;
    margin-top:3%;
    margin-left:6%;
    width:40%;
    height:30%;
   
`;

export const CommentBox = styled.div`
    width:80%;
    margin-top:2%;
    margin-left:6%;
    background:#ffffff;
    display:block;
    padding-top:1%;
`;

export const CommentContainer= styled.div`
    width:70%;
    display:inline-block;
    margin-left:3%;
    margin-top:1em;
    margin-bottom:1em;
    text-align:left;
    vertical-align:top;
`;

export const CommentTitle = styled.div`
    font-size:2.6vh;
    margin-left:3%;
    
`;

export const Username = styled.div`
    font-weight:bold;
    font-size:2.5vh;
    margin-bottom:0.5em;
`;

export const Text = styled.div`
    font-size:2.5vh;
`;