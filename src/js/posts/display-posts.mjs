import { updatePost } from "./update-post.mjs";
import { deletePost } from "./delete-post.mjs";
import { logedOutDialog } from "./logedout-dialog.mjs";

export async function displayPosts(getPosts, container, username, token) {

    try {

        const posts = await getPosts;

        if (token) {

          for( let i = 0; i < posts.length; i++) {

            let image = posts[i].media;
            if(!image) {
                image = "/src/assets/images/wild-and-free.jpg";
            };

            const newPost = document.createElement("div");
            const classesToAdd = ["bg-white", "m-2", "border", "border-info", "rounded-5"];
            newPost.classList.add(...classesToAdd);

            newPost.innerHTML = `<div class="d-flex flex-wrap flex-lg-nowrap flex-xl-nowrap m-4">
                                   <div>
                                      <figure class="figure p-4 d-flex">
                                        <figcaption class="figure-caption text-primary m-2">${posts[i].id}</figcaption>
                                        <img src="/src/assets/images/sheephead.jpg" class="text-bg-light figure-img img-fluid rounded-circle text-bg-primary">
                                      </figure>
                                      <h2 class="p-4">${posts[i].title}</h2>
                                   </div>  
                                    <div class="p-4">
                                       <p><a href="/post/?id=${posts[i].id}" class="btn btn-primary btn-md text-secondary m-4">Go to post <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                                       <img src="${image}" class="img-fluid rounded-3 p-4" alt="Responsive image" style="max-height: 250px">
                                       <p class="p-4">${posts[i].body}</p>
                                    </div>
                                 </div>`;

            container.appendChild(newPost);
            
            if(username === posts[i].author.name) {

              //MODAL COMPONMENTS{
              const updateBtn = document.createElement("button");
              updateBtn.innerText = "Edit post";
              newPost.appendChild(updateBtn);
              const btnClasses = ["btn", "btn-primary", "btn-md", "text-secondary", "m-4"];
              updateBtn.classList.add(...btnClasses);
              updateBtn.classList.add("edit-post-btn");

              const editModal = document.createElement("div");
              newPost.appendChild(editModal);

              const deleteBtn = document.createElement("button");
              deleteBtn.innerText = "Delete Post";
              newPost.appendChild(deleteBtn);
              deleteBtn.classList.add(...btnClasses);
              deleteBtn.classList.add("delete-post-btn");
              deleteBtn.style.backgroundColor = "darkred";

              const deleteModal = document.createElement("div");
              newPost.appendChild(deleteModal);
              //}

              const postData = {
                "title": posts[i].title,
                "body": posts[i].body,
                "tags": posts[i].tags,
                "media": posts[i].media,
                "id": posts[i].id,
              };

              updatePost(updateBtn, postData, editModal);
              deletePost(deleteBtn, postData.id, deleteModal);
            };
        };
        } else {

          const postFormHome = document.getElementById("post-form-home");
          const postFormProfile = document.getElementById("post-form-profile");

          if(postFormHome) {
            postFormHome.innerHTML = logedOutDialog;
          };
          if(postFormProfile) {
            postFormProfile.innerHTML = logedOutDialog;
          }
        };

    } catch(error) {
        console.log(error);
    };
};