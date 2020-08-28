export const commentActions = {
    commentAdd,
    commentDelete,
    commentEdit
}

function commentAdd(){
    return { type: 'ADD' };
}

function commentDelete(){
    return { type: 'DELETE' };
}

function commentEdit(){
    return { type: 'EDIT' };
}