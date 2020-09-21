import immer from "immer";
import { userConstants } from "../constants";

const initialState = {
    //업로드한 영상
    totalUploadedVideo: 0,
    uploadedVideo: [],
    showFallbackUploadedVideo: true
};

export function user(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_REQUEST: {
                draft.uploadedVideo = [];
                draft.showFallbackUploadedVideo = true;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_SUCCESS: {
                draft.totalUploadedVideo = action.total;
                draft.uploadedVideo = action.data;
                draft.showFallbackUploadedVideo = false;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_FAILURE: {
                draft.showFallbackUploadedVideo = false;
                break;
            }
            default:
                return state
        }
    })
}
