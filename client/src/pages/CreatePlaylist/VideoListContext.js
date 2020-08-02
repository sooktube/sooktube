import React, { useReducer, createContext,useContext } from 'react';



const videoLists = [
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"},
    {url:"https://storage.googleapis.com/sttbucket2020/dog1.mp4",title:"title"}
];



function videoReducer(state, action) {
    switch (action.type) {
    case 'ADD':
        return state.concat(action.video);
    }
}




const VideoStateContext = createContext();
const VideoDispatchContext = createContext();


export function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, videoLists);
  return (
    <VideoStateContext.Provider value={state}>
      <VideoDispatchContext.Provider value={dispatch}>
        {children}
      </VideoDispatchContext.Provider>
    </VideoStateContext.Provider>
  );
}

export function useVideoState() {
    return useContext(VideoStateContext);
  }
  
  export function useVideoDispatch() {
    return useContext(VideoDispatchContext);
  }