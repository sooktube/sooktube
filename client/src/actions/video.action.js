import {userConstants, videoConstants} from "../constants";
import {videoService} from "../services";

export const videoActions = {
    uploadVideoFile
};

function uploadVideoFile(input) {
    return dispatch => {
        dispatch(request());
        videoService.getVideoUploadURL({
            uploadFileName: input.uploadFileName,
            username: input.username
        })
        .then(response => {
            const uploadFileName = response[0];
            const uploadURL = response[1];
            dispatch(success(uploadFileName));
            console.log(uploadFileName);
            return videoService.UploadVideoFile(uploadURL, uploadFileName)
        })
        .then(response => {
            return response;
        },
        error => {
            dispatch(failure(error.toString()));
        })
    };

    function request() { return { type: videoConstants.VIDEO_UPLOAD_REQUEST} }
    function success(uploadFileName) { return { type: userConstants.LOGIN_SUCCESS, uploadFileName } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}