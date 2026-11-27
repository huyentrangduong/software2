'use strict';

const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = document.querySelector('#query').value;

    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    results.innerHTML = '';

    for (const tvShow of data) {

        const article = document.createElement('article');

        const name = document.createElement('h2');
        name.textContent = tvShow.show.name;

        const link = document.createElement('a');
        link.href = tvShow.show.url;
        link.textContent = tvShow.show.url;
        link.target = '_blank';

        const image = document.createElement('img');
        image.src = tvShow.show.image?.medium || '';
        image.alt = tvShow.show.name;

        const summary = document.createElement('div');
        summary.innerHTML = tvShow.show.summary || '';

        article.appendChild(name);
        article.appendChild(link);
        article.appendChild(image);
        article.appendChild(summary);

        results.appendChild(article);
    }
});