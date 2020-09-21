import { userConstants } from "../constants";
import { userServices } from "../services";

export const userActions = {
    loadUploadedVideo
};

function loadUploadedVideo({ orderBy, username, limit, offset }) {
    return dispatch => {
        dispatch(request());
        userServices.getVideoByUsername({ orderBy, username, limit, offset })
            .then(response => {
                    dispatch(success(response[0], response[1]));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_REQUEST }}
    function success(total, data) { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_SUCCESS, total, data }}
    function failure(error) { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_FAILURE, error }}
}
