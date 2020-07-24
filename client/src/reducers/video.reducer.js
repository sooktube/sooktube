import { videoConstants } from "../constants";

export function video(state = {}, action) {
    switch (action.type) {
        case videoConstants.VIDEO_UPLOAD_REQUEST:
            return { uploading : true };
        case videoConstants.VIDEO_UPLOAD_SUCCESS:
            return { isUploaded: true };
        case videoConstants.VIDEO_UPLOAD_FAILURE:
            return {};
        default:
            return state
    }
}
