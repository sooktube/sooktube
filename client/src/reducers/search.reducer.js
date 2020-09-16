import immer from "immer";
import { searchConstants } from "../constants";

const initialState = {
    recVideos: [],
    hasMoreRecVideos: true,
    showFallbackRecVideos: true,
    recOffset: 0,
    searchVideos: [],
    hasMoreSearchVideos: true,
    showFallbackSearchVideos: true,
    searchOffset: 0
};

export function search(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case searchConstants.LOAD_REC_VIDEOS_INIT: {
                draft.showWFallbackRecVideos = true;
                draft.hasMoreRecVideos = true;
                draft.recVideos.length = 0;
                draft.recOffset = 0;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_REQUEST: {
                console.log(draft.offset);
                draft.showFallbackRecVideos = true;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_SUCCESS: {
                draft.hasMoreRecVideos = (action.data.length === 5);
                draft.recVideos.push(...action.data);
                draft.recOffset = draft.recOffset + 5;
                draft.showFallbackRecVideos = false;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_FAILURE: {
                draft.showFallbackRecVideos = false;
                break;
            }
            default:
                return state
        }
    })
}
