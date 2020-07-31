import React, {useEffect, useState} from 'react';
import * as S from './style';
import {videoService} from "../../../services";

function SearchVideo() {
    const [keyword, setKeyword] = useState('');

    function handleChange(e) {
        const { value } = e.target;
        setKeyword(value);
    }

    useEffect(() =>{
        if(keyword) {
            videoService.searchVideoByTitle(keyword)
                .then(response => {
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
        </S.SearchVideoWrapper>
    );
}

export default SearchVideo;