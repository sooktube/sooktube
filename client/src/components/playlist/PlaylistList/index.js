import React from 'react';
import * as S from './style';
import PlaylistListItem from "./PlaylistListItem";

function PlaylistList({playlistList, length}) {
    return (
        <S.VideoListWrapper>
            <S.VideoType>My Playlists  {length} </S.VideoType>
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
        </S.VideoListWrapper>
    );
}

export default PlaylistList;