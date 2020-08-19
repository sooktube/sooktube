import React from 'react';
import * as S from './style';
import {Link} from 'react-router-dom';

function SearchButton() {
    return (
        <S.SearchButtonWrapper>
            <Link to='/search/video'> <S.SearchIcon/> </Link>
        </S.SearchButtonWrapper>
    );
}

export default SearchButton;