import Post from './Post';

export default class PostService {
    #createPosts(json: any): Post[] {
        let posts: Post[] = [];
        json.forEach((element: any) => {
            const post = new Post();
            post.init(element);
            posts.push(post);
        });
        return posts;
    }

    constructor() {

    }

    async getPosts(userId: number): Promise<any> {
        let posts: Post[];
        await fetch(`http://localhost:8082/posts/user/${userId}`)
            .then((res) => res.json())
            .then((json) => posts = this.#createPosts(json))
            .catch((error) => console.log(`Error: ${error.message}`));
        return posts;
    }
}