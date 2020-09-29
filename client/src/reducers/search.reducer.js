import immer from "immer";
import { searchConstants } from "../constants";

const initialState = {
    //추천 영상
    recVideos: [],
    hasMoreRecVideos: true,
    showFallbackRecVideos: true,
    recOffset: 0,
    //재생목록 내에서 검색
    searchVideosInPlaylist: [],
    hasMoreSearchVideosInPlaylist: true,
    showFallbackSearchVideosInPlaylist: true,
    searchOffsetInPlaylist: 0,
    //비디오 검색
    videos: [],
    hasMoreVideos: true,
    showFallbackVideos: true,
    videosOffset: 0,
    //재생목록 검색
    playlists: [],
    hasMorePlaylists: true,
    showFallbackPlaylists: true,
    playlistsOffset: 0,
};

export function search(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case searchConstants.LOAD_REC_VIDEOS_INIT: {
                draft.showWFallbackRecVideos = true;
                draft.hasMoreRecVideos = true;
                draft.recVideos = [];
                draft.recOffset = 0;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_REQUEST: {
                draft.showFallbackRecVideos = true;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_SUCCESS: {
                draft.hasMoreRecVideos = (action.data.length === 20);
                draft.recVideos.push(...action.data);
                draft.recOffset = draft.recOffset + 20;
                draft.showFallbackRecVideos = false;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_FAILURE: {
                draft.showFallbackRecVideos = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_INIT: {
                draft.showFallbackSearchVideosInPlaylist = true;
                draft.hasMoreSearchVideosInPlaylist = true;
                draft.searchVideosInPlaylist = [];
                draft.searchOffsetInPlaylist = 0;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_REQUEST: {
                draft.showFallbackSearchVideosInPlaylist = true;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_SUCCESS: {
                draft.hasMoreSearchVideosInPlaylist = (action.data.length === 20);
                draft.searchVideosInPlaylist.push(...action.data);
                draft.searchOffsetInPlaylist = draft.searchOffsetInPlaylist + 20;
                draft.showFallbackSearchVideosInPlaylist = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_FAILURE: {
                draft.showFallbackSearchVideosInPlaylist = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_INIT: {
                draft.showFallbackVideos = true;
                draft.hasMoreVideos = true;
                draft.videos = [];
                draft.videosOffset = 0;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_REQUEST: {
                draft.showFallbackVideos = true;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_SUCCESS: {
                draft.hasMoreVideos = (action.data.length === 5);
                draft.videos.push(...action.data);
                draft.videosOffset = draft.videosOffset + 5;
                draft.showFallbackVideos = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_FAILURE: {
                draft.showFallbackVideos = false;
                break;
            }
            case searchConstants.SEARCH_PLAYLISTS_INIT: {
                draft.showFallbackPlaylists = true;
                draft.hasMorePlaylists = true;
                draft.playlists = [];
                draft.playlistsOffset = 0;
                break;
            }
            case searchConstants.SEARCH_PLAYLISTS_REQUEST: {
                draft.showFallbackPlaylists = true;
                break;
            }
            case searchConstants.SEARCH_PLAYLISTS_SUCCESS: {
                draft.hasMorePlaylists = (action.data.length === 9);
                draft.playlists.push(...action.data);
                draft.playlistsOffset = draft.playlistsOffset + 9;
                draft.showFallbackPlaylists = false;
                break;
            }
            case searchConstants.SEARCH_PLAYLISTS_FAILURE: {
                draft.showFallbackPlaylists = false;
                break;
            }
            default:
                return state
        }
    })
}
