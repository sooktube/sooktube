import React,{ useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {PlaylistWrapper} from "./style";
import {playlistService} from "../../../services";
import FallbackCardList from "../FallbackCardList";

const CardItem = lazy(() => import('./CardItem'));

function PlaylistCardList() {
    const playlists = useSelector(state => state.mainPlaylist);
    const dispatch = useDispatch();


    useEffect(()=>{
    playlistService.getAllPlaylist({orderBy: "newest", limit: 8, offset: 0})
      .then(response => {
        console.log(response);
        dispatch({type:'INIT_MAIN',value:response});
      })

    },[])

    const showFallbackCardList = true;

    return (
    <PlaylistWrapper>
        <Suspense fallback="">
              {playlists.map(list =>
                  <CardItem  key={list.listID}
                                  listID={list.listID}
                                  listName={list.listName}
                                  listDesc={list.listDesc}
                                  like={list.like}
                                  src={list.url}/>
              )}
        </Suspense>
        {showFallbackCardList && <FallbackCardList/>}
    </PlaylistWrapper>
    );
}

export default PlaylistCardList;