import React from 'react';
import CardShelf from "./CardShelf";
import {PlaylistWrapper} from "./style";

function PlaylistCardList() {
    return (
      <PlaylistWrapper>
          <CardShelf/>
          <CardShelf/>
          <CardShelf/>
          <CardShelf/>
      </PlaylistWrapper>
    );
}

export default PlaylistCardList;