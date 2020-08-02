import axios from "axios";


export const videoService = {
    getVideoUploadURL,
    UploadVideoFile,
    UploadVideoInfo,
    getVideoFile,
    getVideoInfoByVideoID,
    makeURL
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

function UploadVideoInfo(input,uploadFileName) {
    const qs= require('qs');
    console.log('aa');
    console.log(input.input.videoTitle);
    console.log('bb');
    console.log(input.uploadFileName);
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/upload',
        data: qs.stringify({
            "videoTitle": input.input.videoTitle,
            "videoDesc": input.input.videoDesc,
            "username": input.input.username,
            "uploadFileName" :input.uploadFileName 
        })})
        .then(response => {
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
        url: `https://soktube.appspot.com//api/video/desc/{videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}



function makeURL(uploadFileName) {
    const qs= require('qs');
    console.log('aa');
    console.log(uploadFileName);
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/getVideo',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            "bucketName": "soktube.appspot.com",
            "uploadFileName": uploadFileName
        })})
        .then(response => {
        console.log(response);
        return response;
        })
        .catch(error => {
        return error;
        })
}