import React from 'react';
import * as S from "./style";
import {history} from "../../../../helpers";

function PlaylistListItem({listID, title, desc, username, isPublic, url}){
  function handleClick() {
    history.push(`/playlist/${listID}`);
  }
  const setPublic="Public";
  const setPrivate="Private";

  return(
    <S.VideoWrapper>
      <S.Thumbnail src={url} onClick={handleClick}/>
      <S.VideoInfo>
        <S.VideoTitle>{title}</S.VideoTitle>
        <S.VideoDescription>{desc.slice(0, 150)} ... </S.VideoDescription>
        <S.VideoDetail>
          <div> {username} </div>
          <div> {isPublic == 1 ? setPublic : setPrivate} </div>
        </S.VideoDetail>
      </S.VideoInfo>
    </S.VideoWrapper>
  );
}

export default PlaylistListItem;