
export function mainPlaylist(state=[],action){
    switch (action.type){
        case 'INIT_MAIN':
            return action.value;
        default:
            return state;
    }
}