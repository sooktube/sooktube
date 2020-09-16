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
                draft.recVideos.length = [];
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
            case searchConstants.SEARCH_VIDEOS_INIT: {
                draft.showFallbackSearchVideos = true;
                draft.hasMoreSearchVideos = true;
                draft.searchVideos.length = [];
                draft.searchOffset = 0;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_REQUEST: {
                draft.showFallbackSearchVideos = true;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_SUCCESS: {
                draft.hasMoreSearchVideos = (action.data.length === 20);
                draft.searchVideos.push(...action.data);
                draft.searchOffset = draft.searchOffset + 20;
                draft.showFallbackSearchVideos = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_FAILURE: {
                draft.showFallbackSearchVideos = false;
                break;
            }
            default:
                return state
        }
    })
}
