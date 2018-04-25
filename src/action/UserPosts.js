import { getAll } from '../DataServices/UserPostsService';

export function getAllPosts(){
		return async dispatch =>{
            let records = await getAll();
            dispatch({
                type: 'GET_ALL',
                payload: records
            })
        }
}
