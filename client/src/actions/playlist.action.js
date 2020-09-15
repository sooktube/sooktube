import { playlistConstants } from "../constants";
import { playlistService } from "../services";

export const playlistActions = {
    loadTrendingPlaylists,
    loadRecentPlaylists,
    loadPlaylistVideos
};

function loadTrendingPlaylists({ orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getAllPlaylist({ orderBy, limit, offset })
        .then(response => {
            dispatch(success(response));
        },
        error => {
            dispatch(failure(error));
        })
    }

    function request() { return { type: playlistConstants.LOAD_TRENDING_PLAYLIST_REQUEST }}
    function success(data) { return { type: playlistConstants.LOAD_TRENDING_PLAYLIST_SUCCESS, data }}
    function failure(error) { return { type: playlistConstants.LOAD_TRENDING_PLAYLIST_FAILURE, error }}
}

function loadRecentPlaylists({ orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getAllPlaylist({ orderBy, limit, offset })
            .then(response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                })
    }

    function request() { return { type: playlistConstants.LOAD_RECENT_PLAYLIST_REQUEST }}
    function success(data) { return { type: playlistConstants.LOAD_RECENT_PLAYLIST_SUCCESS, data }}
    function failure(error) { return { type: playlistConstants.LOAD_RECENT_PLAYLIST_FAILURE, error }}
}

function loadPlaylistVideos({ listID, username, orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getGTEQ5VideoList({ listID, username, orderBy, limit, offset })
            .then(response => {
                    console.log(response);
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                })
    }

    function request() { return { type: playlistConstants.LOAD_PLAYLIST_VIDEO_REQUEST }}
    function success(data) { return { type: playlistConstants.LOAD_PLAYLIST_VIDEO_SUCCESS, data }}
    function failure(error) { return { type: playlistConstants.LOAD_PLAYLIST_VIDEO_FAILURE, error }}
}