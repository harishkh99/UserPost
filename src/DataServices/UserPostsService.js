import { getAllPosts } from './UserPosts.Api';
import {processResponse} from '../DataMapper/UserPostsDataMapper';

export async function getAll(){
	let uri = '/posts';
    let postsList = await getAllPosts(uri);
    const processedData = processResponse(JSON.parse(postsList.text));
    return processedData;
}