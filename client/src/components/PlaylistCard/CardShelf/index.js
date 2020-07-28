import React from 'react';
import {ShelfWrapper, CardWrapper, Shelf, CardImg, CardInfo, CardTitle, CardHeart, ShelfBottom} from "./style";

function CardShelf() {
    const playlists = [
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://cdn.pixabay.com/photo/2020/07/14/13/42/boat-5404195_1280.jpg"

        },
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://cdn.pixabay.com/photo/2020/07/21/15/28/archway-5426581_1280.jpg"
        },
        {
            listName: "재생목록1",
            listDesc: null,
            listLike: 7,
            thumbnail: "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg"
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
            thumbnail: "https://cdn.pixabay.com/photo/2020/06/02/22/56/jellyfish-5252859_1280.jpg"
        }

    ];
    return (
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

            <ShelfBottom/>
        </ShelfWrapper>
    );
}

export default CardShelf;