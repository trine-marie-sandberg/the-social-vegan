import { getPosts } from "/src/js/posts/get-posts.mjs"
import { storageLoad } from "../storage/localstorage.mjs";
import { searchContainer } from "./modal-componments.mjs";

export async function searchHandler(searchBar) {

    let postArray = [];

    //GET ALL POSTS
    const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts/?_author=true";
    const userToken = storageLoad("accessToken");
    postArray = await getPosts(allPostUrl, userToken);

    const searchListContainer = searchContainer();
    document.querySelector("header").appendChild(searchListContainer);
    searchListContainer.style.display = "none";

    searchBar.addEventListener("keyup", (event) => {
        //FILTER POSTARRAY AFTER SEARCHBAR VALUE
        const searchCharacters = event.target.value;
        const searchString = searchCharacters.toLowerCase();
        
        let filteredPosts = postArray.filter(post => {
            
            return post.title.includes(searchString);
        });
        
        searchListContainer.style.display = "block";
        postList(filteredPosts);
    });
    
    //CLOSE SEARCH WHEN CLICK OUTSIDE
    window.addEventListener('mouseup', function(event) { 
        
        if(event.target != searchBar && event.target.parentNode != searchBar){
            
            searchListContainer.style.display = 'none';
        };
    });
    
    //DISPLAY SEARCHRESULT
    const postList = (postArray) => {
        
        const htmlString = postArray.map((post) => {

            let title = post.title;
            let image = post.media;
            
            if(!image) {
                image = "/src/assets/images/wild-and-free.jpg";
            };
            
            return `<a href="/post/?id=${post.id}" class="text-decoration-none">
                      <ul>
                         <li class="list-style-none">
                           <h2>${title}</h2>
                           <image src="${image}" alt="" class="img-fluid" style="height: 80px;">
                         </li>
                       </ul>
                    <a>`;
        }).join("");
    
    searchListContainer.innerHTML = htmlString;
    };
};