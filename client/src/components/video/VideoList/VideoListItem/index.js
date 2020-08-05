import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";
import {useSelector} from "react-redux";

function VideoListItem({videoID, url, title, username, desc, date, like, dislike}){
  function handleClick() {
    history.push(`/@${username}/video/${videoID}`);
  }

  const loginUsername = useSelector(state => state.authentication.username);

  return(
    <S.VideoWrapper>
      <S.Video src={url} onClick={handleClick}/>
      <S.VideoInfo>
        <S.VideoTitle>{title}</S.VideoTitle>
        <S.VideoDescription>{desc.slice(0, 150)} ... </S.VideoDescription>
        <S.VideoDetail>
          <div> {username} </div>
          <div> {date} </div>
        </S.VideoDetail>
      </S.VideoInfo>
      {loginUsername === username &&
        <S.UserButton>
          <S.StyledLink to='/'> 수정 </S.StyledLink>
          <S.StyledLink to='/'> 삭제 </S.StyledLink>
        </S.UserButton>
      }
    </S.VideoWrapper>
  );
}

export default VideoListItem;