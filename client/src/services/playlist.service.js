import axios from "axios";
import qs from 'qs';

export const playlistService ={
    getPlaylistUploadURL,
    UploadPlaylistFile,
    getPlaylistFile,
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

function getPlaylistFile(uploadFileName) {
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

function UploadPlaylistInfo(listName,listDesc,isPublic,uploadFileName) {
    console.log('aa');
    console.log(listName);
    console.log('bb');
    console.log(listDesc);
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/list/newList/info',
        data: qs.stringify({
            "listName": listName,
            "listDesc": listDesc,
            "isPublic" : isPublic,
            "uploadFilename":uploadFileName
        })})
        .then(response => {
        return response;
        })
        .catch(error => {
        return error;
    })
}

