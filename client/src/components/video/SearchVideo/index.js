import React, {useEffect, useState} from 'react';
import * as S from './style';
import {videoService} from "../../../services";
import VideoListItem from "../VideoListItem";

function SearchVideo() {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    function handleChange(e) {
        const { value } = e.target;
        setKeyword(value);
    }

    useEffect(() =>{
        if(keyword) {
            videoService.searchVideoByTitle(keyword)
                .then(response => {
                    setSearchResult(response);
                    console.log(response);
                })
        }
    }, [keyword])

    return (
        <S.SearchVideoWrapper>
            <S.SearchInput name="keyword"
                           value={keyword}
                           onChange={handleChange}
                           placeholder="검색어를 입력하세요."/>
            {keyword && searchResult &&
                <S.SearchResult>
                    {searchResult.map((result, index) =>
                        <VideoListItem key={index}
                                       url={result.videoPath}
                                       title={result.videoTitle}
                                       username={result.username}
                                       date={result.videoDate.substr(0,10)}
                                       like={result.like}
                                       dislike={result.dislike}
                        />
                    )}
                </S.SearchResult>
            }
            {keyword && (!searchResult || searchResult.length === 0) &&
                <S.InvalidSearchFeedback> 검색 결과가 없습니다. </S.InvalidSearchFeedback>
            }
        </S.SearchVideoWrapper>
    );
}

export default SearchVideo;