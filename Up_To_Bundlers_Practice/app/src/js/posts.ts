import '../css/posts.scss';
import Post from './Post';
import PostService from './PostService';

class Dashboard {
    #postsContainer: HTMLElement;
    #postService: PostService;

    constructor(postService: PostService) {
        this.#postService = postService;
        this.#postsContainer = document.querySelector('.postsContainer');
        this.loadPosts();
    }

    async loadPosts() {
        const posts = await this.#postService.getPosts(1);
        posts.forEach((post: Post) => {
            const div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `
                <h1>${post.Title}</h1>
                <p>${post.Content}</p>
                <label>Posted on ${post.PostDate.getDay()} - ${post.PostDate.getMonth()} - ${post.PostDate.getFullYear()}</label>
                <div class="btn-box">
                    <button class="btn-r">Delete</button>
                </div>
            `;
            this.#postsContainer.appendChild(div);
        });
    }
}

new Dashboard(new PostService());