import axios from "axios";
import qs from 'querystring';

export const playlistService ={
    getPlaylistUploadURL,
    UploadPlaylistFile,
    getPlaylistImgByFileName,
    UploadPlaylistInfo,
    getPlaylistInfoByListID,
    getVideoListByListID,
    searchVideoByTitle,
    getGTEQ0LT5VideoList,
    getGTEQ5VideoList,
    recommendVideoInPlaylist,
    cancelRecommendVideoInPlaylist,
    disrecommendVideoInPlaylist,
    cancelDisrecommendVideoInPlaylist,
    addVideoToPlaylist
}

function getPlaylistUploadURL(input) {
    return axios({
         method: 'POST',
         url: 'https://soktube.appspot.com/api/videolist/add/thumbnail',
         headers: {
             'Content-Type': 'application/json',
         },
         data: JSON.stringify({
             "bucketName": "soktube.appspot.com",
             "uploadFileName": input.uploadFileName,
             "username": input.username
         })})
        .then(response => {
             return response.data;
         })
         .catch(error => {
             return error;
         });
 }


 function UploadPlaylistFile(uploadURL, imageFile) {
    return axios({
        method: 'PUT',
        url: uploadURL,
        headers: {
            'Content-Type': imageFile.type,
        },
        data: imageFile
        })
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

function getPlaylistImgByFileName(uploadFileName) {
    return axios({
        method: 'POST',
        url: `https://soktube.uc.r.appspot.com/api/bucket/url`,
        data: {
            "bucketName": "soktube.appspot.com",
            "uploadFileName": `${uploadFileName}`
        }})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}


function UploadPlaylistInfo(input) {
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/list/newList/info',
        data: qs.stringify(input)
        })
        .then(response => {
        return response.data;
        })
        .catch(error => {
        return error;
    })
}

function getPlaylistInfoByListID(listID, username) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/videolist/desc/thumbnail/${listID}/${username}`
    })
        .then(response => {
            return response.data[0];
        })
        .catch(error => {
            return error;
        })
}

function getVideoListByListID(listID) {
    return axios({
        method: 'GET',
        url: 'https://soktube.appspot.com/api/video/list/newList/info'
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function searchVideoByTitle(listID, username, keyword) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/search/title/${keyword}/listID/${listID}/user/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function getGTEQ0LT5VideoList(listID, username) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/list/desc/URL/GTEQ/0/LT/5/${listID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getGTEQ5VideoList(listID, username) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/list/desc/URL/GTEQ/5/${listID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function recommendVideoInPlaylist({listID, videoID, username}) {
    return axios({
        method: 'POST',
        url: `https://soktube.uc.r.appspot.com/api/video/list/like/${listID}/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function cancelRecommendVideoInPlaylist({listID, videoID, username}) {
    return axios({
        method: 'DELETE',
        url: `https://soktube.uc.r.appspot.com/api/video/list/revert/like/${listID}/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function disrecommendVideoInPlaylist({listID, videoID, username}) {
    return axios({
        method: 'DELEE',
        url: `https://soktube.uc.r.appspot.com/api/video/list/dislike/${listID}/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function cancelDisrecommendVideoInPlaylist({listID, videoID, username}) {
    return axios({
        method: 'DELEE',
        url: `https://soktube.uc.r.appspot.com/api/video/list/revert/dislike/${listID}/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function addVideoToPlaylist({listID, videoID, username}) {
    return axios({
        method: 'POST',
        url: `https://soktube.uc.r.appspot.com/api/video/list/newList`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({listID, videoID, username})
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}