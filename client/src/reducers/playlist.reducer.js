import immer from "immer";
import { playlistConstants } from "../constants";

const initialState = {
  playlists: [],
  hasMorePlaylists: true,
  showFallbackPlaylists: true,
  offset: 0
};

export function playlist(state = initialState, action) {
  return immer(state, (draft) => {
    switch (action.type) {
      case playlistConstants.LOAD_PLAYLIST_REQUEST: {
        draft.limit = action.limit;
        draft.showFallbackPlaylists = true;
        break;
      }
      case playlistConstants.LOAD_PLAYLIST_SUCCESS: {
        draft.hasMorePlaylists = (action.data.length === 12);
        draft.playlists.push(...action.data);
        draft.offset = draft.offset + 12;
        draft.showFallbackPlaylists = false;
        break;
      }
      case playlistConstants.LOAD_PLAYLIST_FAILURE: {
        draft.showFallbackPlaylists = false;
        break;
      }
      default:
        return state
    }
  })
}
