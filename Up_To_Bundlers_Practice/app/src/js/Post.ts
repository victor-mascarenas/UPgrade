export default class Post {
    #id: number;
    #title: string;
    #content: string;
    #postDate: Date;

    constructor() {

    }

    init(json: any) {
        this.#id = json.id;
        this.#title = json.title;
        this.#content = json.content;
        this.#postDate = new Date(json.postDate);
    }

    get Id() {
        return this.#id;
    }
    get Title() {
        return this.#title;
    }
    get Content() {
        return this.#content;
    }
    get PostDate() {
        return this.#postDate;
    }
    set Id(id: number) {
        this.#id = id;
    }
    set Title(title: string) {
        this.#title = title;
    }
    set Content(content: string) {
        this.#content = content;
    }
    set PostDate(postDate: Date) {
        this.#postDate = postDate;
    }
}