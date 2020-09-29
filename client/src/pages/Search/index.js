import React, {useEffect, useState} from 'react';
import * as S from "./style";
import { history } from "../../helpers";
import {useRouteMatch, useLocation, Switch, Route, useParams} from 'react-router-dom';
import Header from "../../components/base/Header";

import SearchTypeToggleButton from "../../components/base/Search/SearchTypeToggleButton";
import VideoSearchResult from "../../components/base/Search/VideoSearchResult";
import PlaylistSearchResult from "../../components/base/Search/PlaylistSearchResult";

function Search() {
    const { url } = useRouteMatch();
    const { type } = useParams();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if(keyword) {
            history.push(`${url}?query=${keyword}`);
        }
    }, [keyword])

    function handleChange(e) {
        setKeyword(e.target.value);
    }

    return (
        <S.SearchWrapper>
            <Header/>
            <S.SearchInput name="keyword"
                           type="search"
                           value={keyword}
                           onChange={handleChange}
                           placeholder="검색어를 입력하세요."/>
            <S.SearchResultContainer>
                <SearchTypeToggleButton setKeyword={setKeyword}/>
                {type === 'video'
                    ? <VideoSearchResult query={keyword}/>
                    : <PlaylistSearchResult query={keyword}/>
                }
            </S.SearchResultContainer>
        </S.SearchWrapper>
    );
}

export default Search;