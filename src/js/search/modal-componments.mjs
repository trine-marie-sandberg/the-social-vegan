//Create search container
export function searchContainer() {

    const searchListContainer = document.createElement("div");
    const containerClasses = ["p-4", "overflow-auto"];
    searchListContainer.classList.add(...containerClasses);
    searchListContainer.style.maxHeight = "100vh"
    return searchListContainer;
};

//Display results
export function displayResults(id, title, image, author) {

    return `<div class="border-bottom border-secondary m-2 p-4" style="width: 500px;">
                <a href="/post/?id=${id}" class="text-decoration-none">
                  <div>
                     <h2>${title}</h2>
                     <div class="d-flex justify-content-between">
                        <p>Author: ${author}</p>
                        <p>Id: ${id}</p>
                     </div>
                     <image src="${image}" alt="" class="img-fluid" style="height: 80px;">
                  </div>
                <a>
            </div>`;
};

//Close search modal
export function closeSearch(searchListContainer, searchBar) {

    window.addEventListener('mouseup', function(event) { 
        
        if(event.target != searchBar && event.target.parentNode != searchBar){
            
            searchListContainer.style.display = 'none';
        };
    });
};