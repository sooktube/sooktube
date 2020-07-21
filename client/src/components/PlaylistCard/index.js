import React from 'react';
import {FaHeart} from "react-icons/all";
import {PlaylistWrapper, CardWrapper, CardShelf, CardImg, CardInfo, CardTitle, CardHeart} from "./style";

function PlaylistCard() {
    const a = 'a';
    return (
        <PlaylistWrapper>
          <CardWrapper>
              <CardImg src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"/>
              <CardInfo>
                  <CardTitle> 재생목록 1 </CardTitle>
              </CardInfo>
              <CardHeart/>
          </CardWrapper>
          <CardWrapper>
              <CardImg src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-DQPY/20favorite-book-covers-slide-DQPY-slide.jpg"/>
              <CardInfo>
                  <CardTitle> 재생목록 1 </CardTitle>
              </CardInfo>
              <CardHeart/>
          </CardWrapper>
          <CardWrapper>
              <CardImg src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-QNUF/20favorite-book-covers-slide-QNUF-slide.jpg"/>
              <CardInfo>
                  <CardTitle> 재생목록 1 </CardTitle>
              </CardInfo>
              <CardHeart/>
          </CardWrapper>
          <CardWrapper>
              <CardImg src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-U60O/20favorite-book-covers-slide-U60O-slide.jpg"/>
              <CardInfo>
                  <CardTitle> 재생목록 1 </CardTitle>
              </CardInfo>
              <CardHeart/>
          </CardWrapper>
            <CardShelf/>
        </PlaylistWrapper>
    );
}

export default PlaylistCard;