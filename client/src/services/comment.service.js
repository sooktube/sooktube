import axios from "axios";
import qs from 'querystring';

export const commentService={
    getCommentInfoByVideoID,
    uploadCommentByVideoID,
    updateCommentByVideoID,
    deleteCommentByVideoID,
    getCommentInfoByPlaylistID,
    uploadCommentByPlaylistID,
    updateCommentByPlaylistID,
    deleteCommentByPlaylistID,
    uploadReplyByVideoID,
    uploadReplyByListID
}

function getCommentInfoByVideoID(videoID) {
    return axios({
        method: 'GET',
        url: `https://soktube.appspot.com/api/video/comment/videoID/${videoID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}


function uploadCommentByVideoID(input) {
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/video/comment',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(input),
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
             return error;
        });
 }


 function updateCommentByVideoID(input) {
    return axios({
        method: 'PUT',
        url: `https://soktube.uc.r.appspot.com/api/video/comment/update/${input.commentID}/${input.videoID}/${input.username}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(input.comment)
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function deleteCommentByVideoID(input){
    return axios({
        method: 'DELETE',
        url: `https://soktube.appspot.com/api/video/comment/delete/${input.commentID}/${input.videoID}/${input.seq}/${input.username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function getCommentInfoByPlaylistID(listID) {
    return axios({
        method: 'GET',
        url: `https://soktube.appspot.com/api/list/comment/listID/${listID}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function uploadCommentByPlaylistID(input) {
    return axios({
        method: 'POST',
        url: 'https://soktube.appspot.com/api/list/comment',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(input),
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
             return error;
        });
 }

 function updateCommentByPlaylistID(input) {
    return axios({
        method: 'PUT',
        url: `https://soktube.uc.r.appspot.com/api/list/comment/update/${input.commentID}/${input.listID}/${input.username}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(input.comment)
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function deleteCommentByPlaylistID(input){
    return axios({
        method: 'DELETE',
        url: `https://soktube.appspot.com/api/list/comment/delete/${input.commentID}/${input.listID}/${input.seq}/${input.username}`,
    })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        })
}

function uploadReplyByVideoID(input,parent,seq) {
    return axios({
        method: 'POST',
        url: `https://soktube.appspot.com/api/video/recomment/${parent}/${seq}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(input),
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
             return error;
        });
 }

 function uploadReplyByListID(input,parent,seq) {
    return axios({
        method: 'POST',
        url: `https://soktube.appspot.com/api/list/recomment/${parent}/${seq}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(input),
        })
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
             return error;
        });
 }
