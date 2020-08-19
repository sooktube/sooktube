import axios from "axios";

export const searchService = {
    searchVideoTitle,
    searchPlaylistTitle
};

function searchVideoTitle(keyword) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/search/title/${keyword}/listID/1/user/test123`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function searchPlaylistTitle(keyword) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/list/search/name/${keyword}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}