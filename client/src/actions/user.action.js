import { userConstants } from "../constants";
import { userServices } from "../services";

export const userActions = {
    initUploadedVideoOrderByLike,
    loadUploadedVideoOrderByLike
};

function initUploadedVideoOrderByLike({ orderBy, username, limit }) {
    return dispatch => {
        dispatch(request());
        userServices.getVideoByUsername({ orderBy, username, limit, offset: 0 })
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_INIT }}
    function success(data) { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_SUCCESS, data }}
    function failure(error) { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_FAILURE, error }}
}


function loadUploadedVideoOrderByLike({ orderBy, username, limit, offset }) {
    return dispatch => {
        dispatch(request());
        userServices.getVideoByUsername({ orderBy, username, limit, offset })
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_REQUEST }}
    function success(data) { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_SUCCESS, data }}
    function failure(error) { return { type: userConstants.LOAD_UPLOADED_VIDEO_LIKE_FAILURE, error }}
}
