import axios from "axios";
import qs from 'querystring';

export const videoService = {
    getVideoUploadURL,
    UploadVideoFile,
    UploadVideoInfo,
    getVideoFileByFileName,
    getVideoInfoByVideoID,
    getVideoListByUsername,
    deleteVideoByVideoID,
    updateVideoByVideoID,
    getLikeCountByVideoID
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
            console.log(response);
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
            return response.data;
        })
        .catch(error => {
            return error;
    })
}

function getVideoFileByFileName(uploadFileName) {
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


function getVideoInfoByVideoID(videoID) {
    return axios({
        method: 'GET',
        url: `https://soktube.appspot.com/api/video/desc/url/ID/${videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getVideoListByUsername(username) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/desc/url/user/${username}`,
    })
      .then(response => {
          return response.data;
      })
      .catch(error => {
          return null;
      })
}

function deleteVideoByVideoID(videoID) {
    return axios({
        method: 'DELETE',
        url: `https://soktube.uc.r.appspot.com/api/video/deletebyID/${videoID}`,
    })
      .then(response => {
          return response.data;
      })
      .catch(error => {
          return error;
      })
}

function updateVideoByVideoID(input, videoID) {
    return axios({
        method: 'PUT',
        url: `https://soktube.uc.r.appspot.com/api/video/update/${videoID}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(input)
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getLikeCountByVideoID(videoID) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/like/dislike/videoID/${videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}