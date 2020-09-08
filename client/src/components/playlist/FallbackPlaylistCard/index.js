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
                          display: 'inline-block',
                      }}/>
            <Skeleton width={'30%'}
                      height={'24px'}
                      variant="text"
                      style={{
                          position: 'relative',
                          top: '-80%',
                          left: '60%'
                      }}/>
            <Skeleton width={'45%'}
                      height={'16px'}
                      variant="text"
                      style={{
                          position: 'relative',
                          top: '-70%',
                          left: '53%'
                      }}/>
            <Skeleton width={'45%'}
                      height={'16px'}
                      variant="text"
                      style={{
                          position: 'relative',
                          top: '-70%',
                          left: '53%'
                      }}/>
            <Skeleton width={'35%'}
                      height={'16px'}
                      variant="text"
                      style={{
                          position: 'relative',
                          top: '-70%',
                          left: '53%'
                      }}/>
            <Skeleton width={'25%'}
                      height={'24px'}
                      variant="text"
                      style={{
                          position: 'relative',
                          top: '-35%',
                          left: '53%'
                      }}/>
            <Skeleton width={'10%'}
                      height={'10%'}
                      variant="circle"
                      style={{
                          position: 'relative',
                          top: '-45%',
                          left: '88%'
                      }}/>
        </S.CardWrapper>
    );
}

export default FallbackPlaylistCard;