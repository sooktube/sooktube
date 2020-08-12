export function comment(state=[], action) {
    switch (action.type) {
    case 'INIT':
        return action.value;
    case 'ADD':
        return state.concat(action.value);
    case 'EDIT':
        return state.slice(0,action.index).concat(action.value).concat(state.slice(action.index+1,action.length));
    case 'DELETE':
        return state.slice(0,action.index).concat(state.slice(action.index+1,action.length));
    case 'DELETE_FIRST':
        return state.slice(1,action.length);
    default:
        return state;
    }

}