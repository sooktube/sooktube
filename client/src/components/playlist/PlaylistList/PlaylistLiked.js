import React from 'react';
import * as S from './style';
import PlaylistListItem from "./PlaylistListItem";

function PlaylistLikedList({playlistList, length}) {
    return (
        <S.LikedVideoListWrapper>
            <S.VideoType>Playlist I've Liked  {length} </S.VideoType>
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
        </S.LikedVideoListWrapper>
    );
}

export default PlaylistLikedList;