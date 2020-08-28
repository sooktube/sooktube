import React from 'react';
import * as S from './style';

function MainTabs({ tab }) {
    return (
        <S.TabsWrapper>
            <S.MainTab to="/" active={ tab === "/" ? 1 : 0}>
                <S.Heart active={ tab === "/" ? 1 : 0}/>
                인기
            </S.MainTab>
            <S.MainTab to="/recent" active={ tab === "/recent" ? 1 : 0}>
                <S.Clock active={ tab === "/recent" ? 1 : 0}/>
                최신
            </S.MainTab>
        </S.TabsWrapper>
    );
}

export default MainTabs;