import {videoConstants} from "../constants";
import {videoService} from "../services";

export const videoActions = {
    uploadVideoFile
};

function uploadVideoFile(input) {
    let uploadFileName, uploadURL, videoURL;
    return dispatch => {
        dispatch(request());
        videoService.getVideoUploadURL({
            uploadFileName: input.uploadFileName,
            username: input.username
        })
        .then(response => {
            uploadFileName = response[0];
            uploadURL = response[1];
            return videoService.UploadVideoFile(uploadURL, input.videoFile)
        })
        .then(() => {
            return videoService.getVideoFileByFileName(uploadFileName)
        })
        .then(response => {
            dispatch(success(uploadFileName, String(response)));
            return response;
        },
        error => {
            dispatch(failure(error.toString()));
        })

    };

    function request() { return { type: videoConstants.VIDEO_UPLOAD_REQUEST} }
    function success(uploadFileName, videoURL) { return { type: videoConstants.VIDEO_UPLOAD_SUCCESS, uploadFileName, videoURL } }
    function failure(error) { return { type: videoConstants.VIDEO_UPLOAD_FAILURE, error } }
}