import React from 'react';
import CardShelf from "./CardShelf";
import {PlaylistWrapper} from "./style";

function PlaylistCard() {
    return (
      <PlaylistWrapper>
          <CardShelf/>
          <CardShelf/>
          <CardShelf/>
          <CardShelf/>
      </PlaylistWrapper>
    );
}

export default PlaylistCard;