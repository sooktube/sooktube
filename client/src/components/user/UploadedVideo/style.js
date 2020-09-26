import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
`;

export const Tabs = styled.div`
  float: right;
  padding: 2rem 2rem 0 2rem;
`;

export const Tab = styled.span`
    font-size: 12px;
    color: ${props => props.active === 1 ? '#252b46' : '#9194a1'};  
    margin-right: 0.5em;
    cursor: pointer;
`;


