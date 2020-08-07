import axios from "axios";
import qs from 'qs';

export const playlistService ={
    getPlaylistUploadURL,
    UploadPlaylistFile,
    getVideoPlaylistImgByFileName,
    UploadPlaylistInfo
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
    console.log(imageFile.type);
    console.log('aa');
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

function getVideoPlaylistImgByFileName(uploadFileName) {
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

function UploadPlaylistInfo(list) {
    console.log('aa');
    console.log(list);
    console.log('bb');
    console.log(list.listName);
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/list/newList/info',
        data: qs.stringify({
            "listName": list.listName,
            "listDesc": list.listDesc,
            "isPublic" : list.isPublic,
            "thumbnail":list.uploadFile
        })})
        .then(response => {
        return response;
        })
        .catch(error => {
        return error;
    })
}

