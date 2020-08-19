import React from 'react';
import * as S from './style';
import PlaylistListItem from "./PlaylistListItem";

function PlaylistList({playlistList}) {
    
    return (
        <S.PlaylistListWrapper>
            {playlistList.map(playlist =>
                <PlaylistListItem  key={playlist.listID}
                                   listID={playlist.listID}
                                   title={playlist.listName}
                                   desc={playlist.listDesc}
                                   username={playlist.username}
                                   isPublic={playlist.isPublic}
                                   url={playlist.url}
                />
            )}
        </S.PlaylistListWrapper>
    );
}

export default PlaylistList;