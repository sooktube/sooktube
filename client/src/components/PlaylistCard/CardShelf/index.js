import React from 'react';
import {ShelfWrapper, CardWrapper, Shelf, CardImg, CardInfo, CardTitle, CardHeart, ShelfBottom} from "./style";

function CardShelf() {
    const playlists = [
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"

        },
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"
        },
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"
        },
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"
        },
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"
        }

    ];
    return (
        <>
        <ShelfWrapper>
            {playlists.map(list => (
                <CardWrapper>
                    <CardImg src={list.thumbnail}/>
                    <CardInfo>
                        <CardTitle> {list.listName} </CardTitle>
                    </CardInfo>
                    <CardHeart/>
                </CardWrapper>
            ))}
            <Shelf/>
            <ShelfBottom/>
        </ShelfWrapper>
        </>
    );
}

export default CardShelf;