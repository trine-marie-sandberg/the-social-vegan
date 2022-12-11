export async function displayPosts(getPosts, container) {

    try {

        const posts = await getPosts;

        for( let i = 0; i < posts.length; i++) {

            let image = posts[i].media;
            if(!image) {
                image = "/src/assets/images/wild-and-free.jpg"
            };

            const newPost = document.createElement("div");

            newPost.innerHTML = `<div class="bg-white m-2 p-4 border border-info rounded-5 d-flex flex-wrap flex-lg-nowrap flex-xl-nowrap">
                                   <div class="p-4">
                                     <h2>${posts[i].title}</h2>
                                     <figure class="figure d-flex">
                                       <figcaption class="figure-caption text-primary m-2">${posts[i].id}</figcaption>
                                       <img src="/src/assets/images/sheephead.jpg" class="text-bg-light figure-img img-fluid rounded-circle text-bg-primary">
                                     </figure>
                                     <p>${posts[i].body}</p>
                                   </div>
                                   <div class="p-4">
                                     <img src="${image}" class="img-fluid rounded-3" alt="Responsive image" style="max-height: 250px">
                                   </div>
                                 </div>`

            container.appendChild(newPost);
        };

    } catch(error) {
        console.log(error)
    }
};