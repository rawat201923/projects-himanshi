const apiKey= "459da9ed6e574feeba594569c03c459e";

const blogContainer =  document.getElementById('blog-container');

const searchField= document.getElementById( 'search-input' );
const searchButton = document.getElementById( 'search-button' );

async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles;
        
            
            
    }catch(error){
        console.error("Error fetching random news: ", error);
        return[];

    }
}


searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim();
    if(query !== ''){
        try{
            const articles = await fetchNewsQuery(query)
            displayBlogs(articles);

        }catch(error){
            console.log("error fetching news by query",error);
        }
     
    }
   
  
});

async function fetchNewsQuery(query) {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=20&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching news by query:", error);
        return [];
    }
    const articles = await fetchNewsQuery(query);
    displayBlogs(articles);
}


function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');

        const Img = document.createElement('img');
        Img.src = article.urlToImage;
        Img.alt = article.title;
        const title = document.createElement('h2');
        // titleH2.textContent = articles.title;
        const truncatedTitle =
        article.title.length > 40 ? article.title.slice(0, 30) + "..." : article.title;
        title.textContent = truncatedTitle;

       

        const summary = document.createElement('p') ;
        // summary.textContent = article.description;
        const truncatedsummary =
        article.summary && article.summary.length > 120 ? article.summary.slice(0, 130) + "..." : article.description;
        summary.textContent = truncatedsummary;
    
        
        blogCard.appendChild(Img);
        blogCard.appendChild(title);
        blogCard.appendChild(summary);

        title.addEventListener('click', ()=>{
            window.open(article.url,'_blank');
        });

        blogContainer.appendChild(blogCard); 
    });

}

(async () =>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }catch(error){
        console.error("error fetching random news",error);
    }
})();

/* <![CDATA[ */
window.gtranslateSettings =
  /* document.write */ window.gtranslateSettings || {};
window.gtranslateSettings["38712837"] = {
  default_language: "en",
  languages: ["hi", "fr", "de", "es", "el", "en", "te"],
  url_structure: "none",
  wrapper_selector: "li.menu-item-gtranslate.gt-menu-82002",
  select_language_label: "Select Language",
  horizontal_position: "inline",
  flags_location: "/wp-content/plugins/gtranslate/flags/",
};
/* ]]> */
