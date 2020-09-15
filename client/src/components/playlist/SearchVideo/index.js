import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import debounce from 'lodash.debounce';
import { playlistService } from "../../../services";
import VideoList from "../VideoList";
import { useSelector } from "react-redux";
import RecommendVideoList from "../RecommendVideoList";
import FallbackVideoList from "../FallbackVideoList";

function SearchVideo({listID}) {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = useSelector(state => state.authentication.username);

    function handleChange(e) {
        const { value } = e.target;
        setLoading(true);
        setKeyword(value);
    }

    const updateSearch = useCallback(() => {
        if(keyword) {
            playlistService.searchVideoByTitle({keyword, listID, username, orderBy:'like',limit:'10',offset:0})
                .then(response => {
                    setSearchResult(response);
                    setLoading(false);
                })
        }
    }, [keyword])

    const delayedSearch = useCallback(debounce(updateSearch, 500),[keyword]);

    useEffect(() =>{
        delayedSearch();
        return delayedSearch.cancel;
    }, [keyword])

    return (
        <S.SearchVideoWrapper>
            <S.SearchInput name="keyword"
                           value={keyword}
                           onChange={handleChange}
                           placeholder="검색어를 입력하세요."/>
            <S.SearchComment>
                <div> 재생목록에 추가하고 싶은 영상은 <S.Like/>, 추가하고 싶지 않은 영상은 <S.Dislike/>을 눌러주세요. <br/> </div>
            </S.SearchComment>
            {!keyword && <RecommendVideoList listID={listID} username={username}/>}
            {keyword && loading &&
                <FallbackVideoList/>
            }
            {keyword && !loading && searchResult &&
                <VideoList videoList={searchResult} checkplaylist={1}/>
            }
            {keyword && !loading && (!searchResult || searchResult.length === 0) &&
                <S.InvalidSearchFeedback> 검색 결과가 없습니다. </S.InvalidSearchFeedback>
            }
        </S.SearchVideoWrapper>
    );
}

export default SearchVideo;