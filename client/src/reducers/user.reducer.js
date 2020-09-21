import immer from "immer";
import { userConstants } from "../constants";

const initialState = {
    //업로드한 영상 좋아요순
    totalVideoOrderByLike: 0,
    uploadedVideoOrderByLike: [],
    showFallbackUploadedVideoOrderByLike: true
};

export function user(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_INIT: {
                draft.totalVideoOrderByLike = 0;
                draft.uploadedVideoOffsetOrderByLike = [];
                draft.showFallbackUploadedVideoOrderByLike = true;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_REQUEST: {
                draft.uploadedVideoOffsetOrderByLike = [];
                draft.showFallbackUploadedVideoOrderByLike = true;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_SUCCESS: {
                draft.totalVideoOrderByLike = action.total;
                draft.uploadedVideoOffsetOrderByLike.push(...action.data);
                draft.showFallbackUploadedVideoOrderByLike = false;
                break;
            }
            case userConstants.LOAD_UPLOADED_VIDEO_LIKE_FAILURE: {
                draft.showFallbackUploadedVideoOrderByLike = false;
                break;
            }
            default:
                return state
        }
    })
}
