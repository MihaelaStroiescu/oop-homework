class Model {
    constructor(){
        this.commentURL = "https://jsonplaceholder.typicode.com/";
        this.promise = fetch(this.commentURL + 'posts?_limit=10')
                            .then(resp => resp.json());
    }

    async ShowAllArticles() {
        let posts = [];
        posts = await this.promise;
        console.log(posts);
        view_articles.displayPosts(posts);
        view_articles.selectPostPage();
    };

    async ShowOneArticle(id) {
        const post = await fetch(this.commentURL + 'posts/' + id).then(resp => resp.json());
        return post;
    }

    async getComments(post) {
        const comments = await fetch(this.commentURL + 'comments/?postId=' + post.id).then(resp => resp.json());
        return comments;
    }
};

const model = new Model();
