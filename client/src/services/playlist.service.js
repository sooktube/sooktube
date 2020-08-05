import axios from "axios";
import qs from 'querystring';

export const playlistService ={
    getPlaylistUploadURL,
    UploadPlaylistFile,
    getPlaylistImgByFileName,
    UploadPlaylistInfo,
    getPlaylistInfoByListID,
    getVideoListByListID
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
             console.log(response);
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

function getPlaylistInfoByListID(listID) {
    return axios({
        method: 'GET',
        url: `https://soktube.uc.r.appspot.com/api/videolist/desc/thumbnail/${listID}`
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