import { searchConstants } from "../constants";
import { playlistService, searchService } from "../services";

export const searchActions = {
    initRecommendedVideos,
    loadRecommendedVideos,
    initSearchVideosInPlaylist,
    searchVideosInPlaylist,
    searchVideos,
    initSearchVideos,
    searchPlaylists,
    initSearchPlaylists
};

function initRecommendedVideos({ listID, username, orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getGTEQ0LT5VideoList({ listID, username, orderBy, limit, offset: 0 })
            .then(response => {
                dispatch(success(response));
            },
            error =>{
                dispatch(failure(error));
            })
    }

    function request() { return { type: searchConstants.LOAD_REC_VIDEOS_INIT }}
    function success(data) { return { type: searchConstants.LOAD_REC_VIDEOS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.LOAD_REC_VIDEOS_FAILURE, error }}
}

function loadRecommendedVideos({ listID, username, orderBy, limit, offset }) {
    return dispatch => {
        dispatch(request());
        playlistService.getGTEQ0LT5VideoList({ listID, username, orderBy, limit, offset })
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.LOAD_REC_VIDEOS_REQUEST }}
    function success(data) { return { type: searchConstants.LOAD_REC_VIDEOS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.LOAD_REC_VIDEOS_FAILURE, error }}
}

function initSearchVideosInPlaylist({keyword, listID, username, orderBy, limit, offset}) {
    return dispatch => {
        dispatch(request());
        searchService.searchVideoByTitleInPlaylist({keyword, listID, username, orderBy, limit, offset: 0})
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_INIT }}
    function success(data) { return { type: searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_FAILURE, error }}
}

function searchVideosInPlaylist({keyword, listID, username, orderBy, limit, offset}) {
    return dispatch => {
        dispatch(request());
        searchService.searchVideoByTitleInPlaylist({keyword, listID, username, orderBy, limit, offset})
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_REQUEST }}
    function success(data) { return { type: searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.SEARCH_VIDEOS_IN_PLAYLIST_FAILURE, error }}
}

function initSearchVideos({keyword, orderBy, limit}) {
    return dispatch => {
        dispatch(request());
        searchService.searchVideoByTitleInPlaylist({keyword, listID: 1, username: 'none', orderBy, limit, offset: 0})
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.SEARCH_VIDEOS_INIT }}
    function success(data) { return { type: searchConstants.SEARCH_VIDEOS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.SEARCH_VIDEOS_FAILURE, error }}
}


function searchVideos({keyword, orderBy, limit, offset}) {
    return dispatch => {
        dispatch(request());
        searchService.searchVideoByTitleInPlaylist({keyword, listID: 1, username: 'none', orderBy, limit, offset})
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.SEARCH_VIDEOS_REQUEST }}
    function success(data) { return { type: searchConstants.SEARCH_VIDEOS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.SEARCH_VIDEOS_FAILURE, error }}
}

function initSearchPlaylists({keyword, orderBy, limit}) {
    return dispatch => {
        dispatch(request());
        searchService.searchPlaylistTitle({keyword, orderBy, limit, offset: 0})
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.SEARCH_PLAYLISTS_INIT }}
    function success(data) { return { type: searchConstants.SEARCH_PLAYLISTS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.SEARCH_PLAYLISTS_FAILURE, error }}
}


function searchPlaylists({keyword, orderBy, limit, offset}) {
    return dispatch => {
        dispatch(request());
        searchService.searchPlaylistTitle({keyword, orderBy, limit, offset})
            .then(response => {
                    dispatch(success(response));
                },
                error =>{
                    dispatch(failure(error));
                })
    }

    function request() { return { type: searchConstants.SEARCH_PLAYLISTS_REQUEST }}
    function success(data) { return { type: searchConstants.SEARCH_PLAYLISTS_SUCCESS, data }}
    function failure(error) { return { type: searchConstants.SEARCH_PLAYLISTS_FAILURE, error }}
}