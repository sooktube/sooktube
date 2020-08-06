import React, {useEffect, useState} from 'react';
import * as S from './style';
import {playlistService, videoService} from "../../../services";
import SearchListItem from "./SearchListItem";

function SearchVideo() {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    function handleChange(e) {
        const { value } = e.target;
        setKeyword(value);
    }

    useEffect(() =>{
        if(keyword) {
            playlistService.searchVideoByTitle(keyword)
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
            <S.SearchComment>
                재생목록에 추가하고 싶은 영상은 <S.Like/> 추가하고 싶지 않은 영상은 <S.Dislike/> 버튼을 눌러주세요. <br/>
            </S.SearchComment>
            {keyword && searchResult &&
                <S.SearchResult>
                    {searchResult.map((result, index) =>
                        <SearchListItem key={index}
                                        videoID={result.videoID}
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