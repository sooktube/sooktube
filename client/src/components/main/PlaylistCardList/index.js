import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from "./CardItem";
import {PlaylistWrapper} from "./style";
import {playlistService} from "../../../services";


function PlaylistCardList() {
  const playlists = useSelector(state => state.mainPlaylist);
  const username = useSelector(state => state.authentication.username);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    playlistService.getAllPlaylist({username, orderBy: "newest", limit: 10, offset: 0})
      .then(response => {
        console.log(response);
        dispatch({type:'INIT_MAIN',value:response});
      })
  },[])

  return (
    <PlaylistWrapper>
        {playlists && playlists.map(list =>
            <CardItem  key={list.listID}
                            listID={list.listID}
                            listName={list.listName}
                            listDesc={list.listDesc}
                            like={list.like}
                            src={list.url}
            />
        )}
    </PlaylistWrapper>
  );
}

export default PlaylistCardList;