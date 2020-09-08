import React, { memo } from 'react';
import { Skeleton } from "@material-ui/lab";
import * as S from './style';
import {MAIN} from "../../style/Main";

function FallbackPlaylistCard() {
    return (
        <S.CardWrapper>
            <Skeleton width={'50%'}
                      height={'100%'}
                      variant="rect"
                      style={{
                          margin: 0,
                          padding: 0
                      }}/>
            <Skeleton width={'100px'}
                      height={'18px'}
                      variant="text"
                      style={{
                          marginRight: "25%"
                      }}/>
            <Skeleton width={'50%'}
                      height={'16px'}
                      variant="text"
                      style={{
                          margin: '3em 0 0.5em 0'
                      }}/>
        </S.CardWrapper>
    );
}

export default memo(FallbackPlaylistCard);