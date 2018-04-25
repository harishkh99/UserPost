import { Record, List } from 'immutable';
import { UserPost }  from './UserPost';


export const UserPostsEntity = Record({
  userPosts : new List([new UserPost()])
});
