import React from 'react';
import * as S from './style';
import { Skeleton } from "@material-ui/lab";

function FallbackItem({ marginLeft }) {
    return (
      <S.Wrapper>
          <Skeleton width={'150px'}
                    height={'84px'}
                    variant={'rect'}
                    />

          <S.VideoInfoWrapper>
              <Skeleton width={'180px'}
                        height={'1.5em'}
                        variant={'text'}
                        style={{
                            margin: '0.5em 0'
                        }}
              />
              <Skeleton width={'50px'}
                        height={'1em'}
                        variant={'text'}
                        style={{
                            marginTop: '3.5em',
                            marginLeft: `${marginLeft}em`,
                            display: 'inline-block'
                        }}
              />
              <Skeleton width={'80px'}
                        height={'1em'}
                        variant={'text'}
                        style={{
                            marginTop: '3.5em',
                            marginLeft: '1em',
                            display: 'inline-block'
                        }}
              />
          </S.VideoInfoWrapper>
          <S.LikeWrapper>
              <Skeleton width={'25px'}
                        height={'25px'}
                        variant={'circle'}
                        style={{
                            marginRight: '1em'
                        }}
                        />
              <Skeleton width={'25px'}
                        height={'25px'}
                        variant={'circle'}
              />
          </S.LikeWrapper>

      </S.Wrapper>
    );
}

export default FallbackItem;