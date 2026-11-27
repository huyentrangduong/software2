'use strict';

const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = document.querySelector('#query').value;

    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    results.innerHTML = '';

    for (const joke of data.result) {

        const article = document.createElement('article');

        const p = document.createElement('p');
        p.textContent = joke.value;

        article.appendChild(p);

        results.appendChild(article);
    }
});