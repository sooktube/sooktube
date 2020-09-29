import immer from "immer";
import { playlistConstants } from "../constants";

const initialState = {
  trendingPlaylists: [],
  hasMoreTrendingPlaylists: true,
  showFallbackTrendingPlaylists: true,
  trendingOffset: 0,
  recentPlaylists: [],
  hasMoreRecentPlaylists: true,
  showFallbackRecentPlaylists: true,
  recentOffset: 0,
  videos: [],
  hasMoreVideos: true,
  showFallbackVideos: true,
  videoOffset: 0
};

export function playlist(state = initialState, action) {
  return immer(state, (draft) => {
    switch (action.type) {
      case playlistConstants.LOAD_TRENDING_PLAYLIST_REQUEST: {
        draft.showFallbackTrendingPlaylists = true;
        break;
      }
      case playlistConstants.LOAD_TRENDING_PLAYLIST_SUCCESS: {
        draft.hasMoreTrendingPlaylists = (action.data.length === 12);
        draft.trendingPlaylists.push(...action.data);
        draft.trendingOffset = draft.trendingOffset + 12;
        draft.showFallbackTrendingPlaylists = false;
        break;
      }
      case playlistConstants.LOAD_TRENDING_PLAYLIST_FAILURE: {
        draft.showFallbackTrendingPlaylists = false;
        break;
      }
      case playlistConstants.LOAD_RECENT_PLAYLIST_REQUEST: {
        draft.showFallbackRecentPlaylists = true;
        break;
      }
      case playlistConstants.LOAD_RECENT_PLAYLIST_SUCCESS: {
        draft.hasMoreRecentPlaylists = (action.data.length === 12);
        draft.recentPlaylists.push(...action.data);
        draft.recentOffset = draft.recentOffset + 12;
        draft.showFallbackRecentPlaylists = false;
        break;
      }
      case playlistConstants.LOAD_RECENT_PLAYLIST_FAILURE: {
        draft.showFallbackRecentPlaylists = false;
        break;
      }
      case playlistConstants.LOAD_PLAYLIST_VIDEO_INIT: {
        draft.showFallbackVideos = true;
        draft.hasMoreVideos = true;
        draft.videos.length = 0;
        draft.videoOffset = 0;
        break;
      }
      case playlistConstants.LOAD_PLAYLIST_VIDEO_REQUEST: {
        draft.showFallbackVideos = true;
        break;
      }
      case playlistConstants.LOAD_PLAYLIST_VIDEO_SUCCESS: {
        draft.hasMoreVideos = (action.data.length === 5);
        draft.videos.push(...action.data);
        draft.videoOffset = draft.videoOffset + 5;
        draft.showFallbackVideos = false;
        break;
      }
      case playlistConstants.LOAD_PLAYLIST_VIDEO_FAILURE: {
        draft.showFallbackVideos = false;
        break;
      }
      default:
        return state
    }
  })
}
