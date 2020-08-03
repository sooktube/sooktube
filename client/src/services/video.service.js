import axios from "axios";
import qs from 'querystring';

export const videoService = {
    getVideoUploadURL,
    UploadVideoFile,
    UploadVideoInfo,
    getVideoFile,
    getVideoInfoByVideoID,
    searchVideoByTitle
};

function getVideoUploadURL(input) {
   return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/createURL',
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

function UploadVideoFile(uploadURL, videoFile) {
    return axios({
        method: 'PUT',
        url: uploadURL,
        headers: {
            'Content-Type': 'video/mp4',
        },
        data: videoFile
        })
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

function UploadVideoInfo(input) {
    return axios({
        method: 'POST',
        url: 'https://soktube.uc.r.appspot.com/api/video/upload',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(input),
        })
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => {
            return error;
    })
}

function getVideoFile(uploadFileName) {
    return axios({
        method: 'GET',
        url: `https://soktube.appspot.com/api/video/getVideobyFile/${uploadFileName}`,
    })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        })
}


function getVideoInfoByVideoID(videoID) {
    return axios({
        method: 'GET',
        url: `https://soktube.appspot.com/api/video/desc/url/ID/71`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}


function searchVideoByTitle(keyword) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/search/title/${keyword}`,
    })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            return error;
        })
}



