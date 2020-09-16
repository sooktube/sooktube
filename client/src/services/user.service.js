import axios from 'axios';

export const userServices = {
    getVideoListByUsername,
    getVideoLikedByUsername,
    getPlaylistListByUsername,
    getPlaylistListLikedByUsername
};

function getVideoListByUsername({username, orderBy, limit, offset}) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/desc/url/user/${username}/newest?limit=100&offset=0`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function getVideoLikedByUsername(username) {
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

function getPlaylistListByUsername({username, orderBy, limit, offset}) {
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

function getPlaylistListLikedByUsername(username) {
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