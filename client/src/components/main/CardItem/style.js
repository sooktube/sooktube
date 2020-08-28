import styled from 'styled-components';

export const CardImageWrapper = styled.div`
    display: block;
    color: inherit;
    text-decoration: none;
    border-radius: 5px;
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
    }
    position: relative;
    height: 200px;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
`;

export const CardWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 250px;
    width: 200px;
    margin-bottom: 2.5em;
    margin-right: 1.2em;
    background-color: #fff;
    border-radius: 7px;
    box-shadow:  10px 10px 20px #d3d3d9, -12px -12px 20px #ffffff;
    &:hover section {
      transform: translateY(-1em);
      transition: all .7s;
    }
    &:hover img {
      transition: 0.3s;
      opacity: 0.4;
    }
    &:hover article {
      display: block;
    }
`;

export const CardInfo = styled.section`
    padding: 0.5em 1em 0 1em;
    position: absolute;
    bottom: 0.5em;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: #fff;
`;

export const CardTitle = styled.h2`
    padding-left: 0.2em;
    float:left;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: #212529;
`;

export const LikeWrapper = styled.div`
    display: flex;
    float: right;
    margin-top: 1em;
    svg {
      margin-right: 5px;
      color: #71A6C6;
    }
`;
export const CardDesc = styled.article`
    font-size: 12px;
    color: #212529;
    margin-top: 4em;
    line-height: 1.3em;
    display: none;
`;


