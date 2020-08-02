import axios from "axios";

export const playlistService = {
  getVideoListByListID,
  uploadVideoToPlaylist
}


function getVideoListByListID(listID) {
  return axios({
    method: 'GET',
    url: `https://soktube.uc.r.appspot.com/api/video/list/desc/URL/${listID}`,
  })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      })
}

function uploadVideoToPlaylist(input) {
  return axios({
    method: 'POST',
    url: `https://soktube.uc.r.appspot.com/api/video/list/newList`,
    data: JSON.stringify(input)
  })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      })
}

