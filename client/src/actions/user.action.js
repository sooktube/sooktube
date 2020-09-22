import { userConstants } from "../constants";
import { userServices } from "../services";

export const userActions = {
    loadUploadedVideo,
    loadUploadedPlaylist,
    loadLikedVideos,
    loadLikedPlaylists
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

function loadUploadedPlaylist({ orderBy, username, limit, offset }) {
    return dispatch => {
        dispatch(request());
        userServices.getPlaylistByUsername({ orderBy, username, limit, offset })
            .then(response => {
                    dispatch(success(response[0], response[1]));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: userConstants.LOAD_UPLOADED_PLAYLIST_REQUEST }}
    function success(total, data) { return { type: userConstants.LOAD_UPLOADED_PLAYLIST_SUCCESS, total, data }}
    function failure(error) { return { type: userConstants.LOAD_UPLOADED_PLAYLIST_FAILURE, error }}
}

function loadLikedVideos({ username, limit, offset }) {
    return dispatch => {
        dispatch(request());
        userServices.getLikedVideoByUsername({ username, limit, offset })
            .then(response => {
                    dispatch(success(response[0], response[1]));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: userConstants.LOAD_LIKED_VIDEO_REQUEST }}
    function success(total, data) { return { type: userConstants.LOAD_LIKED_VIDEO_SUCCESS, total, data }}
    function failure(error) { return { type: userConstants.LOAD_LIKED_VIDEO_FAILURE, error }}
}

function loadLikedPlaylists({ username, limit, offset }) {
    return dispatch => {
        dispatch(request());
        userServices.getLikedPlaylistByUsername({ username, limit, offset })
            .then(response => {
                    dispatch(success(response[0], response[1]));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: userConstants.LOAD_LIKED_PLAYLISTS_REQUEST }}
    function success(total, data) { return { type: userConstants.LOAD_LIKED_PLAYLISTS_SUCCESS, total, data }}
    function failure(error) { return { type: userConstants.LOAD_LIKED_PLAYLISTS_FAILURE, error }}
}