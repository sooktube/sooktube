import React, {useEffect, useState} from 'react';
import * as S from './style';
import {useParams} from 'react-router-dom';
import {searchService} from "../../../../services/search.service";
import VideoList from "../../../video/VideoList";

function SearchResult() {
    const {type, keyword} = useParams();
    const [searchResult, setSearchResult] = useState(null);

    useEffect(()=> {
        console.log(type);
        if(type === 'video') {
            searchService.searchVideoTitle(keyword)
                .then(response => {
                    setSearchResult(response);
                })
        }
        else if (type === 'playlist') {
            searchService.searchPlaylistTitle(keyword)
                .then(response => {
                    setSearchResult(response);
                })
        }
    }, [keyword]);

    return (
        <>
            {searchResult
                ? <VideoList videoList={searchResult} checkplaylist={true}/>
                : <div> 검색 결과가 없습니다. </div>
            }
        </>
    );
}

export default SearchResult;