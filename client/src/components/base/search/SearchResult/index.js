import React, {useEffect, useState} from 'react';
import * as S from './style';
import {useParams} from 'react-router-dom';
import {searchService} from "../../../../services/search.service";
import VideoList from "../../../video/VideoList";

function SearchResult({ query }) {
    const { type } = useParams();
    const [searchResult, setSearchResult] = useState(null);

    useEffect(()=> {
        console.log(query);
        if(type === 'video' && query) {
            searchService.searchVideoTitle(query)
                .then(response => {
                    console.log(response);
                    setSearchResult(response);
                })
        }
        else if (type === 'playlist' && query) {
            searchService.searchPlaylistTitle(query)
                .then(response => {
                    setSearchResult(response);
                })
        }
    }, [query]);

    return (
        <>
            {searchResult
                ? <VideoList videoList={searchResult} checkplaylist={true}/>
                : <S.SearchResultComment> 검색 결과가 없습니다. </S.SearchResultComment>
            }
        </>
    );
}

export default SearchResult;