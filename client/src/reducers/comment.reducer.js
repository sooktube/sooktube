


const initial_comment = [
    {username:'hye',text:'I hope you think of me high',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
    {username:'hajung',text:'when you are with someone else',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
    {username:'jua',text:'today i called to tell you that im changing',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'},
    {username:'hyerin',text:'dumb di dumb di dumb di di dumb',photo:'https://storage.googleapis.com/sttbucket2020/sunset.jpg'}
];

export function comment(state=initial_comment, action) {
    switch (action.type) {
    case 'INIT':
        return action.value;
    case 'ADD':
        return state.concat(action.value);
    case 'EDIT':
        return state.slice(0,action.index).concat(action.value).concat(state.slice(action.index+1,action.length));
    case 'DELETE':
        return state.slice(0,action.index).concat(state.slice(action.index+1,length));
    case 'DELETE_FIRST':
        return state.slice(1,action.length);
    default:
        return state;
    }

}