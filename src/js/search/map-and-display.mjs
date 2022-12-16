import { displayResults } from "./modal-componments.mjs";

//Map and display results
export const postList = (filteredPosts, searchListContainer) => {
    
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