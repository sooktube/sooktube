import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardShelf from "./CardShelf";
import {PlaylistWrapper} from "./style";
import {playlistService} from "../../../services";


function PlaylistCardList() {
  const playlists = useSelector(state => state.mainPlaylist);
  const username = useSelector(state => state.authentication.username);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    playlistService.getAllPlaylist(username)
      .then(response=>{
        dispatch({type:'INIT_MAIN',value:response});
      })
  })

    return (
      <PlaylistWrapper>
          {playlists &&playlists.map(list =>
              <CardShelf  key={list.listID}
                              listID={list.listID}
                              listName={list.listName}
                              url={list.url}
              />
          )}
      </PlaylistWrapper>
    );
}

export default PlaylistCardList;