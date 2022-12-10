export async function displayPosts(getPosts, container) {

    try {
        const posts = await getPosts;
        console.log(posts);
        for( let i = 0; i < posts.length; i++) {

            console.log(posts.title)
            const newPost = document.createElement("section");
            newPost.innerHTML = `<h2>${posts[i].title}</h2>`

            container.appendChild(newPost);
            //console.log(container)
        };

    } catch(error) {
        console.log(error)
    }
};