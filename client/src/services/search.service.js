import axios from "axios";

export const searchService = {
    searchVideoTitle,
    searchPlaylistTitle,
    searchVideoByTitleInPlaylist
};

function searchVideoTitle({ keyword, listID, username, orderBy, limit, offset}) {
    console.log("offset", offset);
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/search/title/${keyword}/listID/${listID}/user/${username}/${orderBy}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function searchPlaylistTitle({keyword, orderBy, limit, offset}) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/list/search/name/${keyword}/${orderBy}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function searchVideoByTitleInPlaylist({keyword, listID, username, orderBy, limit, offset}) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/search/title/${keyword}/listID/${listID}/user/${username}/${orderBy}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}