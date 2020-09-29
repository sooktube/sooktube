import axios from 'axios';

export const userServices = {
    getVideoByUsername,
    getLikedVideoByUsername,
    getPlaylistByUsername,
    getLikedPlaylistByUsername
};

function getVideoByUsername({ orderBy, username, limit, offset }) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/desc/url/user/${username}/${orderBy}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getLikedVideoByUsername({ username, limit, offset }) {
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

function getPlaylistByUsername({username, orderBy, limit, offset}) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/list/by/username/${username}/${orderBy}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getLikedPlaylistByUsername({username, limit, offset}) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/liked/list/byUser/${username}?limit=${limit}&offset=${offset}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}