import axios from "axios";

export const searchService={
    searchVideo
};

function searchVideo(videoTitle){
    return axios.get(`https://soktube.appspot.com/api/video/search/title/${videoTitle}`)
            .then(response => {
                console.log(response);
                return response;
            })
            .catch(error => {
                return error;
            });
}

