class ViewArticles extends Model {
    constructor() {
        super()
        this.post = model.ShowAllArticles();
    }

    displayPosts(posts) {
        console.log(posts);
        for (let post of posts) {
            const div = document.createElement('div');
            const div1 = document.createElement('div');
            const p = document.createElement('p');
            const h2 = document.createElement('h2');
            const image = document.createElement('img');
            image.src = "landscape.jpg";
            div.appendChild(image).classList.add("image");
            h2.innerHTML = post.title;
            p.innerHTML = post.body;
            document.body.appendChild(div).classList.add("article");
            div.appendChild(div1).classList.add("paragraph");
            div1.appendChild(h2).classList.add("title");
            div1.appendChild(p).classList.add("content");
        };
    }

    selectPostPage() {
        let article = document.querySelectorAll('.title');
        for (let i = 0; i < article.length; i++) {
            let postId = i + 1;
            article[i].addEventListener("click", function(e){ getNewPage(postId) });
        }
        function getNewPage(postId) {
            window.location.assign("art-details.html?id=" + postId);
        }
    }
}

const view_articles = new ViewArticles();
