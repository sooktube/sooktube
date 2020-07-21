import React from 'react';
import {ShelfWrapper, CardWrapper, Shelf, CardImg, CardInfo, CardTitle, CardHeart, ShelfBottom} from "./style";

function CardShelf() {
    return (
        <>
        <ShelfWrapper>
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
            <CardWrapper>
                <CardImg src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"/>
                <CardInfo>
                    <CardTitle> 재생목록 1 </CardTitle>
                </CardInfo>
                <CardHeart/>
            </CardWrapper>
            <Shelf/>
            <ShelfBottom/>
        </ShelfWrapper>
        </>
    );
}

export default CardShelf;