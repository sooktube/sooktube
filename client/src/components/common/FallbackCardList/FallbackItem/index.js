import React, { memo } from 'react';
import { Skeleton } from "@material-ui/lab";
import * as S from './style';

const FallbackItem = () => {
    return (
        <S.CardWrapper>
            <Skeleton width={'200px'}
                      height={'200px'}
                      variant="rect"
                      style={{
                          margin: 0,
                          padding: 0
                      }}/>
            <Skeleton width={'100px'}
                      height={'18px'}
                      variant="text"
                      style={{
                          margin: '5px 0 0 5px'
                      }}/>
            <Skeleton width={'22px'}
                      height={'22px'}
                      variant="circle"
                      style={{
                          float: 'right',
                          marginRight: '5px'
                      }}/>
        </S.CardWrapper>
    );
};

export default memo(FallbackItem);