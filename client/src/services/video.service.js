import axios from "axios";
import qs from 'querystring';

export const videoService = {
    getVideoUploadURL,
    UploadVideoFile,
    UploadVideoInfo,
    getVideoFileByFileName,
    getVideoInfoByVideoID,
    deleteVideoByVideoID,
    updateVideoByVideoID,
    getLikeCountByVideoID,
    likeVideo,
    cancelLikeVideo,
    dislikeVideo,
    cancelDislikeVideo,
    getRelatedVideoListInPlaylist,
    getRelatedVideoListByUploader
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

function getVideoInfoByVideoID(videoID, username) {
    return axios({
        method: 'GET',
        url: `https://soktube.appspot.com/api/video/desc/url/ID/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
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
        url: `https://soktube.uc.r.appspot.com/api/like/dislike/count/videoID/${videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function likeVideo({videoID, username}) {
    return axios({
        method: 'POST',
        url: `https://soktube.uc.r.appspot.com/api/like/video/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function cancelLikeVideo({videoID, username}) {
    return axios({
        method: 'DELETE',
        url: `https://soktube.uc.r.appspot.com/api/like/video/revert/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function dislikeVideo({videoID, username}) {
    return axios({
        method: 'POST',
        url: `https://soktube.uc.r.appspot.com/api/dislike/video/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

function cancelDislikeVideo({videoID, username}) {
    return axios({
        method: 'DELETE',
        url: `https://soktube.uc.r.appspot.com/api/dislike/video/revert/${videoID}/${username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return null;
        })
}

//동영상이 어떤 재생목록에 추가되어 있는 경우, 해당 재생목록의 추천 + 비추천 수가 5 이상인 다른 영상들 리턴
function getRelatedVideoListInPlaylist(videoID) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/inlist/${videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getRelatedVideoListByUploader(videoID) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/video/recommend/byUploader/${videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}