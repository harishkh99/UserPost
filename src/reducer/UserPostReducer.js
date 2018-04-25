import  { UserPostsEntity } from '../shapes/UserPostsEntity';

export function getAllPosts(state, payload){
    return {
        ...state,
        posts : payload
    }
}

const UserPostReducer = function (state = new UserPostsEntity(), action){
    switch(action.type){
        case 'GET_ALL':
            return getAllPosts(
                state,
                action.payload
            )
        default:
            return state;
    }
}

export default UserPostReducer;