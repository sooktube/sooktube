import React, {useEffect, useState} from 'react';
import * as S from './style';
import {useParams} from 'react-router-dom';
import {searchService} from "../../../../services";
import VideoList from "../../../video/VideoList";
import PlaylistList from "../../../playlist/PlaylistList";

function SearchResult({ query }) {
    const { type } = useParams();
    const [videoSearchResult, setVideoSearchResult] = useState(null);
    const [playlistSearchResult, setPlaylistSearchResult] = useState(null);

    useEffect(()=> {
        if(type === 'video' && query) {
            searchService.searchVideoTitle(query)
                .then(response => {
                    setVideoSearchResult(response);
                })
        }
        else if (type === 'playlist' && query) {
            searchService.searchPlaylistTitle(query)
                .then(response => {
                    setPlaylistSearchResult(response);
                })
        }
    }, [query]);

    return (
        <S.SearchResultContainer>
            {type === 'video' && query &&
                <>
                {videoSearchResult && videoSearchResult.length > 0
                    ? <VideoList videoList={videoSearchResult} checkplaylist={true}/>
                    : <S.SearchResultComment> 검색 결과가 없습니다. </S.SearchResultComment>
                }
                </>
            }
            {type === 'playlist' && query &&
                <>
                {playlistSearchResult && playlistSearchResult.length > 0
                    ? <PlaylistList playlistList={playlistSearchResult}/>
                    : <S.SearchResultComment> 검색 결과가 없습니다. </S.SearchResultComment>
                }
            </>
            }
        </S.SearchResultContainer>
    );
}

export default SearchResult;