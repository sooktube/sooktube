import { playlistConstants } from "../constants";
import { playlistService } from "../services";

export const playlistActions = {
    loadPlaylists
};

function loadPlaylists({ orderBy, limit, offset }) {
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

    function request() { return { type: playlistConstants.LOAD_PLAYLIST_REQUEST }}
    function success(data) { return { type: playlistConstants.LOAD_PLAYLIST_SUCCESS, data }}
    function failure(error) { return { type: playlistConstants.LOAD_PLAYLIST_FAILURE, error }}
}