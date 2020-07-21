import React from 'react';
import './card.scss';
import {FaHeart} from "react-icons/all";

function PlaylistCard() {

    return (
      <>
          <div className="books">
                <img src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-ORTM/20favorite-book-covers-slide-ORTM-slide.jpg"/>
                <img src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-DQPY/20favorite-book-covers-slide-DQPY-slide.jpg"/>
                <img src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-QNUF/20favorite-book-covers-slide-QNUF-slide.jpg"/>
                <img src="https://graphics8.nytimes.com/images/2012/12/19/books/20favorite-book-covers-slide-U60O/20favorite-book-covers-slide-U60O-slide.jpg"/>
                <div className="shelf"></div>
          </div>
      </>
    );
}

export default PlaylistCard;