import '../css/posts.scss';
import Post from './Post';
import PostService from './PostService';

class Dashboard {
    #postsContainer: HTMLElement;
    #postService: PostService;
    #modal: HTMLElement;
    
    #hideModal() {
        this.#modal.classList.add('down');
        const modalContentInput = this.#modal.querySelector('#contentModal') as HTMLInputElement;
        modalContentInput.value = '';
    }

    constructor(postService: PostService) {
        this.#postService = postService;
        this.#postsContainer = document.querySelector('.postsContainer');
        this.init();
        this.loadPosts();
    }

    init() {
        document.querySelector('#postBtn').addEventListener('click', this.postOnClick.bind(this));
        this.#modal = document.querySelector('.overlay') as HTMLElement;
        document.querySelector('#modalPostBtn').addEventListener('click', this.modalPostOnClick.bind(this));
        document.querySelector('#modalCancelBtn').addEventListener('click', this.modalCancelOnClick.bind(this));
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

    postOnClick(e: Event) {
        const contentInput = document.querySelector('#content') as HTMLInputElement;
        const modalContentInput = this.#modal.querySelector('#contentModal') as HTMLInputElement;
        modalContentInput.value = contentInput.value;
        this.#modal.classList.remove('down');
    }
    modalPostOnClick(e: Event) {
        this.#hideModal();
    }
    modalCancelOnClick(e: Event) {
        this.#hideModal();
    }
}

new Dashboard(new PostService());