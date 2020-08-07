import React, { useReducer, createContext,useContext } from 'react';



const initial_comment = [
    {username:'hyerin',text:'I hope you think of me high',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
    {username:'hajung',text:'when you are with someone else',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
    {username:'jua',text:'today i called to tell you that im changing',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'}
];



function commentReducer(state, action) {
    switch (action.type) {
    case 'ADD':
        return state.concat(action.value);
    case 'EDIT':
        return state.slice(0,action.index).concat(action.value);
    case 'EDITANDCONCAT':
        return state.concat(state.slice(action.index,action.length));
    case 'DELETE':
        return state.filter(n => n != action.value);
    }
        
}

function textReducer(state1,action){
  switch(action.type){
    case 'CHANGE':
      return action.value;
  }
}
const initial_text ='abc';


const CommentStateContext = createContext();
const CommentDispatchContext = createContext();
const TextContext =createContext();
const TextDispatchContext =createContext();

export function CommentProvider({ children }) {
  const [state, dispatch] = useReducer(commentReducer, initial_comment);
  const [state1, dispatch1] = useReducer(textReducer, initial_text);

  return (
    <TextContext.Provider value={state1}>
      <TextDispatchContext.Provider value={dispatch1}>
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
    </TextDispatchContext.Provider>
    </TextContext.Provider>
  );
}

export function useCommentState() {
    return useContext(CommentStateContext);
  }
  
  export function useCommentDispatch() {
    return useContext(CommentDispatchContext);
  }

  export function useTextState() {
    return useContext(TextContext);
  }

  export function useTextDispatch() {
    return useContext(TextDispatchContext);
  }