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
    async post(post: Post, userId: number): Promise<boolean> {
        let done = false;
        const date: string = post.PostDate.toISOString().slice(0, 10);
        await fetch('http://localhost:8082/posts/user/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({id: 0, title: post.Title, content: post.Content, postDate: date, userId: userId})
        })
            .then(() => done = true)
            .catch((error) => console.log(`Error: ${error.message}`));
        return done;
    }
}