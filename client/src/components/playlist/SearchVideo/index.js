import React, {useEffect, useState} from 'react';
import * as S from './style';
import {playlistService} from "../../../services";
import VideoList from "../VideoList";
import {useSelector} from "react-redux";
import RecommendVideoList from "../RecommendVideoList";

function SearchVideo({listID}) {
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const username = useSelector(state => state.authentication.username);

    function handleChange(e) {
        const { value } = e.target;
        setKeyword(value);
    }

    useEffect(() =>{
        if(keyword) {
            playlistService.searchVideoByTitle({keyword, listID, username, orderBy:'like',limit:'10',offset:0}) 
                .then(response => {
                    setSearchResult(response);
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
                <div> 재생목록에 추가하고 싶은 영상은 <S.Like/>, 추가하고 싶지 않은 영상은 <S.Dislike/>을 눌러주세요. <br/> </div>
            </S.SearchComment>
            {!keyword && <RecommendVideoList listID={listID} username={username}/>}
            {keyword && searchResult &&
                <VideoList videoList={searchResult} checkplaylist={true}/>
            }
            {keyword && (!searchResult || searchResult.length === 0) &&
                <S.InvalidSearchFeedback> 검색 결과가 없습니다. </S.InvalidSearchFeedback>
            }
        </S.SearchVideoWrapper>
    );
}

export default SearchVideo;