
export const processResponse = (response) => {
    let posts = null;
    const postsList = response.map((post, index) => {
                            posts = []
                            posts.id = post.id;
                            posts.userId = post.userId;
                            posts.title = post.title;
                            posts.body = post.body;
                            return posts;    
                        });
    return postsList;
}