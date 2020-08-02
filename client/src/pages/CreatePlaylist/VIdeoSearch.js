import React,{useRef,useState,createContext,useReducer,useContext} from 'react';
import * as S from "./style";
import {searchService} from "../../services/search.service";
import {videoService} from "../../services/video.service";
import Video from "./VideoChoose/Video";
import {useVideoState} from "./VideoListContext";


const checkVideoList = [{aaaa:'aa'}];
    function checkReducer(state, action) {
        switch (action.type) {
        case 'ADD':
            return state.concat(action.video);
        }
    }
    
    

const CheckStateContext = createContext();
const CheckDispatchContext = createContext();


function VideoSearch(){

    const [videoList,setVideoList] = useState([]);
    const [urlList,setUrlList] = useState([]);
    const [videoVisible,setVideoVisible]=useState(false);
    const [videoClick,setVideoClick] = useState(false);

    const nameInput = useRef(null);
    const videoState = useVideoState();

    /*const [state, dispatch] = useReducer(checkReducer, checkVideoList);*/



    function SearchVideo(){
        const value = nameInput.current.value;
        console.log(value);
        searchService.searchVideo(value)
        .then(response => {
            for (let i=0;i<response.data.length;i++){
                videoList.push(response.data[i]);
                const a =response.data[i].uploadFileName;
                console.log(a);
                videoService.makeURL(a)
                .then(response => {
                    console.log(response);
                    videoService.getVideoFile(a)
                    .then(response => {
                    urlList.push(response.data);
                    console.log(urlList);
                });
                })
                
            }
            
            console.log(response.data[0].videoTitle);
            console.log(videoList);
            if(videoList.length!=0){
                setVideoVisible(true);
            }
            else{
                setVideoVisible(false);
            }
            
        });
        
    }



    return(
        

        <S.SearchBox>
            <S.SearchInput ref={nameInput} placeholder="동영상 제목을 입력하세요"></S.SearchInput>
            <S.SearchButton onClick={SearchVideo}>Search</S.SearchButton>
            <S.VideoList2>
                {!videoVisible && <S.IsVideo>검색 결과가 없습니다</S.IsVideo>}
                {console.log(videoList)}
                
                
                {true && videoList.map(
                (video,index) => (<CheckStateContext.Provider value={checkVideoList}>
                  <Video
                    v_url={urlList[videoList.indexOf(video)]}
                    v_title={video.videoTitle}/></CheckStateContext.Provider>)
                )}
            </S.VideoList2>
            <S.AddButton>Add Videos</S.AddButton>
        </S.SearchBox>
       

    );
}


export function useCheckState() {
    return useContext(CheckStateContext);
  }
  
  export function useCheckDispatch() {
    return useContext(CheckDispatchContext);
  }

export default VideoSearch;

