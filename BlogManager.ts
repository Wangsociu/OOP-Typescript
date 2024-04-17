class Post {
    title : string;
    content: string;
    author : string;
    date : string;

    constructor(title: string, content: string, author: string, date: string) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
    }

    displayInfo() {
        console.log(`title: ${this.title}`);
        console.log(`content: ${this.content}`);
        console.log(`author: ${this.author}`);
        console.log(`date: ${this.date}`);
        console.log("-----------------------------");
    }
}


class BlogManage {
    posts : Post[];

    constructor() {
        this.posts = [];
    }

    addPost(post: Post): void {
        this.posts.push(post);
    }

    displayAllpost():void {
        console.log('>>> List of post');
        this.posts.forEach(post => {
            post.displayInfo();
        });
    }
}


let post1 = new Post("First Post", "Content of the first post", "John Doe", "2024-04-14");
let post2 = new Post("Second Post", "Content of the second post", "Jane Smith", "2024-04-15");

let blogmanage = new BlogManage();
blogmanage.addPost(post1);
blogmanage.addPost(post2);

blogmanage.displayAllpost();