import axios from 'axios';

export const userServices = {
    getVideoByUsername,
    getLikedVideoByUsername,
    getPlaylistByUsername,
    getLikedPlaylistByUsername
};

function getVideoByUsername({username, limit, offset}) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/liked/video/byUsername/${username}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getLikedVideoByUsername(username) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/liked/video/byUsername/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function getPlaylistByUsername({username, orderBy, limit, offset}) {
    return axios({
        method: 'GET',
        url: `/api/video/list/by/username/${username}/newest?limit=100&offset=0`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function getLikedPlaylistByUsername(username) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/liked/list/byUser/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}