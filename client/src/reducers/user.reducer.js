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
            default:
                return state
        }
    })
}
