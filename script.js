const memeGen = document.querySelector(".meme-gen");
const memeBtn = document.querySelector(".meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector("img");
const memeAuthor = document.querySelector(".meme-author");

const memeDetails = (url, title, author) => {
    memeImage.setAttribute("src", url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `This is the author: ${author}`;
}
const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json())
    .then((data) => memeDetails(data.url, data.title, data.author));
    
}
memeBtn.addEventListener("click", generateMeme);
generateMeme()