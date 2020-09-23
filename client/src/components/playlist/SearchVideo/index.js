import React, {useCallback, useEffect, useState, lazy, Suspense, Fragment} from 'react';
import * as S from './style';
import debounce from 'lodash.debounce';
import {useDispatch, useSelector} from "react-redux";
import { searchActions } from "../../../actions";
import RecommendVideoList from "../RecommendVideoList";
import FallbackVideoList from "../FallbackVideoList";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
const VideoListItem = lazy(() => import("../VideoList/VideoListItem"));

function SearchVideo({listID}) {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');
    const username = useSelector(state => state.authentication.username);

    const result = useSelector(state => state.search.searchVideosInPlaylist);
    const hasMoreResults = useSelector(state => state.search.hasMoreSearchVideosInPlaylist);
    const showFallbackItems = useSelector(state => state.search.showFallbackSearchVideosInPlaylist);
    const offset = useSelector(state => state.search.searchOffsetInPlaylist);

    const [opts, setOpts] = useState({
        listID,
        username,
        orderBy: "like",
        limit: 20,
        offset: offset
    })

    useEffect(() => {
        setOpts({...opts, offset})
    }, [offset]);

    useInfiniteScroll({
        items: result,
        hasMoreItems: hasMoreResults,
        ratio: 0.6,
        action: searchActions.searchVideosInPlaylist({keyword, ...opts})
    });

    function handleChange(e) {
        const { value } = e.target;
        setKeyword(value);
    }

    const updateSearch = useCallback(() => {
        if(keyword) {
            dispatch(searchActions.initSearchVideosInPlaylist({keyword, ...opts}));
        }
    }, [listID, keyword])

    const delayedSearch = useCallback(debounce(updateSearch, 500),[keyword]);

    useEffect(() =>{
        delayedSearch();
        return delayedSearch.cancel;
    }, [keyword])

    return (
        <S.SearchVideoWrapper>
            <S.SearchInput name="keyword"
                           type="search"
                           value={keyword}
                           onChange={handleChange}
                           placeholder="검색어를 입력하세요."/>
            <S.SearchComment>
                <div> 재생목록에 추가하고 싶은 영상은 <S.Like/>, 추가하고 싶지 않은 영상은 <S.Dislike/>을 눌러주세요. <br/> </div>
            </S.SearchComment>
            {!keyword && <RecommendVideoList listID={listID} username={username}/>}
            <Suspense fallback="">
                {keyword && !showFallbackItems && result.length === 0
                    ? <S.InvalidSearchFeedback> 검색 결과가 없습니다. </S.InvalidSearchFeedback>
                    : <Fragment>
                        {result.map(result =>
                            <VideoListItem key={result.videoID}
                                           checkplaylist={1}
                                           videoID={result.videoID}
                                           url={result.videoPath}
                                           title={result.videoTitle}
                                           username={result.username}
                                           date={result.videoDate.substr(0, 10)}
                                           recommended={result.recommended}
                                           disrecommended={result.disrecommended}
                                           recCount={result.recCount}
                                           disrecCount={result.disrecCount}
                                           inVideoList={result.inVideoList}
                                           listUsername={username}
                                           listID={listID}
                                           isPublic={1}
                                           playlist={0}/>
                        )}
                    </Fragment>
                }
            </Suspense>
            {keyword && showFallbackItems &&
            <FallbackVideoList marginLeft={-3}/>
            }
        </S.SearchVideoWrapper>
    );
}

export default SearchVideo;