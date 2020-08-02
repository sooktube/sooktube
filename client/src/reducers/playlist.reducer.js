import { playlistConstants } from "../constants";

export function playlist(state = {}, action) {
  switch (action.type) {
    case playlistConstants.VIDEO_UPLOAD_REQUEST:
      return { uploading : true };
    case playlistConstants.VIDEO_UPLOAD_SUCCESS:
      return {
        isUploaded: true,
        videoList: action.data,
      };
    case playlistConstants.VIDEO_UPLOAD_FAILURE:
      return {};
    default:
      return state
  }
}
