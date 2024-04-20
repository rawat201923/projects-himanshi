//-======== link where we can got api -https://github.com/D3vd/Meme_Api===>//

const generateMemeBtn = document.querySelector('.meme-generator.generate-meme-btn');
const memeImage = document.querySelectorAll(".meme-generator img");
const memeTitle = document.querySelectorAll(".meme-generator .meme-title");
const memeAuthor = document.querySelectorAll(".meme-generator .meme-author");;


const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};

const generateMeme = () =>{
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response)=> response.json())
    .then(data => {
        updateDetails(data.url,data.title,data.author) ;

    });

};

generateMemeBtn.addEventListener("click",generateMeme);