
const key = "L5aDAhnVbYiBwINtZyymGbvtt0lNBMBK";

/* ************** 
Random Gif Section
*************** */
const randomBaseURL = "https://api.giphy.com/v1/gifs/random";

document.getElementById("randomGifBtn").addEventListener("click", randomFetchResults);

function randomFetchResults() {
    
    fetch(`${randomBaseURL}?api_key=${key}&limit=1&offset=1&rating=g&lang=en`)
        .then(function (resultRandom) {
            return resultRandom.json();
        })
        .then(function (jsonRandom) {
            // console.log(jsonRandom.data.images.original.url);
            displayRandom(jsonRandom);
        });
}

function displayRandom(jsonRandom) {
    document.getElementById("randomGif").src = jsonRandom.data.images.original.url
}



/* ****************** 
MAD LIB SECTION
************** */
const baseURL = "https://api.giphy.com/v1/gifs/search";

let urlCreature;
let urlPhrase;

document.querySelector("form").addEventListener("submit", fetchResults);

function fetchResults(e) {
    e.preventDefault();
    urlCreature = `${baseURL}?api_key=${key}&q=${searchCreature.value}&limit=1&offset=1&rating=g&lang=en`;
    urlPhrase = `${baseURL}?api_key=${key}&q=${searchPhrase.value}&limit=1&offset=1&rating=g&lang=en`;
    urlVerb = `${baseURL}?api_key=${key}&q=${searchVerb.value}&limit=1&offset=1&rating=g&lang=en`;
    document.getElementById("searchCreatureText").textContent = ` ${searchCreature.value.toUpperCase()}!`;
    document.getElementById("searchPhraseText").textContent = ` ${searchPhrase.value.toUpperCase()}!`;
    document.getElementById("searchVerbText").textContent = ` ${searchVerb.value.toUpperCase()}!`;

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
            displayPhrase(jsonPhrase);
        });

        fetch(urlVerb)
        .then(function (resultsVerb) {
            return resultsVerb.json();
        })
        .then(function (jsonVerb) {
            displayVerb(jsonVerb);
        });
}

function displayCreature(jsonCreature) {
    document.getElementById("creatureGif").src = jsonCreature.data[0].images.original.url
}
function displayPhrase(jsonPhrase) {
    document.getElementById("phraseGif").src = jsonPhrase.data[0].images.original.url
}
function displayVerb(jsonVerb) {
    document.getElementById("verbGif").src = jsonVerb.data[0].images.original.url
}