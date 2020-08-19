import React, {useEffect, useState} from 'react';
import * as S from "./style";
import {history} from "../../../helpers";
import {Switch, Route, useRouteMatch, useParams, useLocation} from 'react-router-dom';
import Header from "../Header";
import SearchResult from "./SearchResult";
import SearchTypeToggleButton from "./SearchTypeToggleButton";

function Search() {
    const { url } = useRouteMatch();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if(keyword) {
            history.push(`${url}?query=${keyword}`);
        }
    }, [keyword])

    function handleChange(e) {
        setKeyword(e.target.value);
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();

    return (
        <S.SearchWrapper>
            <Header/>
            <S.KeywordInputWrapper>
                <S.SearchInput name="keyword"
                               value={keyword}
                               onChange={handleChange}
                               placeholder="검색어를 입력하세요."/>
            </S.KeywordInputWrapper>
            <S.SearchResultContainer>
                <SearchTypeToggleButton setKeyword={setKeyword}/>
                <SearchResult query={query.get("query")}/>
            </S.SearchResultContainer>
        </S.SearchWrapper>
    );
}

export default Search;