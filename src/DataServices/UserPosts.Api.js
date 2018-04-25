import promise from 'bluebird';
import request from 'superagent';

const baseURL = 'http://jsonplaceholder.typicode.com';
export async function getAllPosts(uri){
	let url = `${baseURL}${uri}`;
    let postsList = await request.get(url);
    return postsList;
}