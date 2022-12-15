import { getPosts } from "/src/js/posts/get-posts.mjs"
import { storageLoad } from "../storage/localstorage.mjs";
import { searchContainer, displayResults, closeSearch } from "./modal-componments.mjs";

export async function searchHandler(searchBar) {

    let postArray = [];

    //GET ALL POSTS
    const allPostUrl = "https://nf-api.onrender.com/api/v1/social/posts/?_author=true";
    const userToken = storageLoad("accessToken");
    postArray = await getPosts(allPostUrl, userToken);
    console.log(postArray)

    //Asign search container
    const searchListContainer = searchContainer();
    document.querySelector("header").appendChild(searchListContainer);
    searchListContainer.style.display = "none";

    //Filter postArray after searchString
    searchBar.addEventListener("keyup", (event) => {

        const searchCharacters = event.target.value;
        const searchString = searchCharacters.toLowerCase();
        
        let filteredPosts = postArray.filter(post => {
                //👇 
            const author = post.author.name.toLowerCase();
            const includeAuthor = author.includes(searchString);
                //👇
            const title = post.title.toLowerCase();
            const includeTitle = title.includes(searchString);
                //👇
            const id = JSON.stringify(post.id);
            const includeId = id.includes(id);
            console.log(includeId)
                //👇
            // const body = JSON.stringify(post.body);
            // const includeBody = body.includes(body);
            // console.log(includeBody)

            return includeTitle + includeAuthor;
        });
        
        searchListContainer.style.display = "block";
        postList(filteredPosts);
    });
    
    //Close searchModal
    closeSearch(searchListContainer, searchBar);
    
    //Display results
    const postList = (filteredPosts) => {
        
        const htmlString = filteredPosts.map((post) => {

            let id = post.id;
            let title = post.title;
            let image = post.media;
            let author = post.author.name;

            if(!image) {
                image = "/src/assets/images/wild-and-free.jpg";
            };

            return displayResults(id, title, image, author);

        }).join("");
    
    searchListContainer.innerHTML = htmlString;
    };
};