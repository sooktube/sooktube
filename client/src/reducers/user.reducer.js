import immer from "immer";
import { userConstants } from "../constants";

const initialState = {
    //업로드한 영상
    totalUploadedVideos: 0,
    uploadedVideos: [],
    showFallbackUploadedVideos: true,
    //업로드한 재생목록
    totalUploadedPlaylists: 0,
    uploadedPlaylists: [],
    showFallbackUploadedPlaylists: true,
    //좋아한 영상
    totalLikedVideos: 0,
    likedVideos: [],
    showFallbackLikedVideos: true,
    //좋아한 재생목록
    totalLikedPlaylists: 0,
    likedPlaylists: [],
    showFallbackLikedPlaylists: true,
};

export function user(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_REQUEST: {
                draft.uploadedVideos = [];
                draft.showFallbackUploadedVideos = true;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_SUCCESS: {
                draft.totalUploadedVideos = action.total;
                draft.uploadedVideos = action.data;
                draft.showFallbackUploadedVideos = false;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_FAILURE: {
                draft.showFallbackUploadedVideos = false;
                break;
            }
            case userConstants.LOAD_UPLOADED_PLAYLIST_REQUEST: {
                draft.uploadedPlaylists = [];
                draft.showFallbackUploadedPlaylists = true;
                break;
            }
            case userConstants.LOAD_UPLOADED_PLAYLIST_SUCCESS: {
                draft.totalUploadedPlaylists = action.total;
                draft.uploadedPlaylists = action.data;
                draft.showFallbackUploadedPlaylists = false;
                break;
            }
            case userConstants.LOAD_UPLOADED_PLAYLIST_FAILURE: {
                draft.showFallbackUploadedPlaylists = false;
                break;
            }
            case userConstants.LOAD_LIKED_VIDEO_REQUEST: {
                draft.likedVideos = [];
                draft.showFallbackLikedVideos = true;
                break;
            }
            case userConstants.LOAD_LIKED_VIDEO_SUCCESS: {
                draft.totalLikedVideos = action.total;
                draft.likedVideos = action.data;
                draft.showFallbackLikedVideos = false;
                break;
            }
            case userConstants.LOAD_LIKED_VIDEO_FAILURE: {
                draft.showFallbackLikedVideos = false;
                break;
            }
            case userConstants.LOAD_LIKED_PLAYLISTS_REQUEST: {
                draft.likedPlaylists = [];
                draft.showFallbackLikedPlaylists = true;
                break;
            }
            case userConstants.LOAD_LIKED_PLAYLISTS_SUCCESS: {
                draft.totalLikedPlaylists = action.total;
                draft.likedPlaylists = action.data;
                draft.showFallbackLikedPlaylists = false;
                break;
            }
            case userConstants.LOAD_LIKED_PLAYLISTS_FAILURE: {
                draft.showFallbackLikedPlaylists = false;
                break;
            }
            default:
                return state
        }
    })
}
