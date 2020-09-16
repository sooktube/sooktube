import immer from "immer";
import { userConstants } from "../constants";

const initialState = {
    uploadedVideo: [],
    hasMoreUploadedVideo: true,
    showFallbackUploadedVideo: true,
    uploadedVideoOffset: 0,
};

export function user(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case userConstants.LOAD_UPLOADED_VIDEO_REQUEST: {
                draft.showFallbackUploadedVideo = true;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_SUCCESS: {
                draft.hasMoreUploadedVideo = (draft.uploadedVideoOffset < action.total);
                draft.uploadedVideo.push(...action.data);
                draft.uploadedVideoOffset = draft.uploadedVideoOffset + 20;
                draft.showFallbackUploadedVideo = false;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_FAILURE: {
                draft.showFallbackUploadedVideo = false;
                break;
            }
            default:
                return state
        }
    })
}
