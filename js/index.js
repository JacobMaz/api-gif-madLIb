
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5

const baseURL = "http://api.giphy.com/v1/gifs/search";
const key = "L5aDAhnVbYiBwINtZyymGbvtt0lNBMBK";
let urlCreature;
let urlPhrase;

const searchCreature = document.getElementById("searchCreature");
const searchPhrase = document.getElementById("searchPhrase");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

// const nextBtn = document.querySelector(".next");
// const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

const section = document.querySelector("section");

searchForm.addEventListener("submit", fetchResults);
// nextBtn.addEventListener("click", nextPage);
// previousBtn.addEventListener("click", previousPage);

function fetchResults(e) {
    e.preventDefault();
    urlCreature = `${baseURL}?api_key=${key}&q=${searchCreature.value}&limit=1&offset=1&rating=g&lang=en`;
    urlPhrase = `${baseURL}?api_key=${key}&q=${searchPhrase.value}&limit=1&offset=1&rating=g&lang=en`;
    // console.log("URL: ", url)

    fetch(urlCreature)
        .then(function (resultCreature) {
            return resultCreature.json();
        })
        .then(function (jsonCreature) {
            console.log(jsonCreature);
            displayCreature(jsonCreature);
        });

    fetch(urlPhrase)
        .then(function (resultsPhrase) {
            return resultsPhrase.json();
        })
        .then(function (jsonPhrase) {
            // console.log(jsonPhrase);
            displayPhrase(jsonPhrase);
        });
}

function displayCreature(jsonCreature){
    document.getElementById("creatureGif").src = jsonCreature.data[0].images.original.url
}
function displayPhrase(jsonPhrase){
    document.getElementById("phraseGif").src = jsonPhrase.data[0].images.original.url
}