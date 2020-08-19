import React, {useEffect, useState} from 'react';
import * as S from "./style";
import {history} from "../../../helpers";
import {Switch, Route, useRouteMatch, useParams} from 'react-router-dom';
import Header from "../Header";
import SearchResult from "./SearchResult";

function Search() {
    const { path, url } = useRouteMatch();
    const { type } = useParams();
    const [keyword, setKeyword] = useState('');

    useEffect(() =>{
        if(keyword) {
            history.push(`${url}/${keyword}`);
        }
    }, [keyword])

    function handleChange(e) {
        setKeyword(e.target.value);
    }

    return (
        <>
            <Header/>
            <S.SearchVideoWrapper>
                <S.SearchInput name="keyword"
                               value={keyword}
                               onChange={handleChange}
                               placeholder="검색어를 입력하세요."/>
            </S.SearchVideoWrapper>

            <Switch>
                <Route path={`${path}/:keyword`}>
                    <SearchResult/>
                </Route>
            </Switch>
        </>
    );
}

export default Search;