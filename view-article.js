class ViewArticle {
    constructor(){
        this.model = new Model();
        this.displayComments();
    }

    async displayComments() {
        const postId = getUrlParam("id");
        const post = await this.model.ShowOneArticle(postId);

        console.log('postID', postId);
        console.log('post', post);

        const comments = await this.model.getComments(post);

        const h2 = document.getElementsByClassName("post__title");
        h2[0].innerText = post.title;
        const image = document.getElementsByClassName("image");
        image.src = "landscape.jpg";
        const bodyPost = document.getElementsByClassName("post__body");
        bodyPost[0].innerHTML = post.body;
        console.log(this);

        for (let comment of comments) {
            console.log("p=", comment);
            const ul = document.getElementsByClassName('post__comments')[0];
            const li = document.createElement('li');

            li.innerHTML = '<em>' + comment.email + '</em>'+ '<br/>' + comment.body ;
            ul.appendChild(li);
        }

    }
}
function getUrlParam(postId) {
    var results = new RegExp('[\?&]' + postId + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}

const view_article = new ViewArticle();












// function displayPosts(tenPosts, comments) {
//     console.log(comments);
//     let i = 0;
//     for (let post of tenPosts) {
//         const div = document.createElement('div');
//         let p = document.createElement('p');
//         const h3 = document.createElement('h3');
//         h3.innerHTML = post.title;
//         p.innerHTML = post.body;
//         document.body.appendChild(div);
//         div.appendChild(h3);
//         div.appendChild(p);

//         for (let comment of comments[i]) {
//             const div1 = document.createElement('div');
//             const p1 = document.createElement('p');
//             const p2 = document.createElement('p');
//             p1.innerHTML = comment.email;
//             p2.innerHTML = comment.body;
//             console.log("p=", comment.body);
//             document.body.appendChild(div1);
//             div1.appendChild(p1)
//             div1.appendChild(p2);
//         }
//     }
// }
