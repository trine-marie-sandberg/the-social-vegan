import { getPosts } from "/src/js/posts/get-posts.mjs"
import { storageLoad } from "../storage/localstorage.mjs";

export async function searchHandler(searchBar) {

    const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts/?_author=true";
    let postArray = [];

    //GET ALL POSTS
    const userToken = storageLoad("accessToken");
    
    postArray = await getPosts(allPostUrl, userToken);

    const searchListContainer = document.createElement("div");
    const containerClasses = ["p-4"];
    searchListContainer.classList.add(...containerClasses);
    document.querySelector("header").appendChild(searchListContainer);
    searchListContainer.style.display = "none";

    searchBar.addEventListener("keyup", (event) => {
        //FILTER POSTARRAY AFTER SEARCHBAR VALUE
        const searchString = event.target.value;
        
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
            title.toLowerCase();
            let image = post.media;
            if(!image) {
                image = "/src/assets/images/wild-and-free.jpg";
            };
            
            return `<a href="/post/?id=${post.id}">
                      <div class="search-results-container">
                         <li>
                           <h2>${title}</h2>
                           <image src="${image}" alt="" class="img-fluid" style="height: 80px;">
                         </li>
                       </div>
                    <a>`;
        }).join("");
    
    searchListContainer.innerHTML = htmlString;
    };
};