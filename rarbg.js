// ==UserScript==
// @name         RARBG
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Filtre les mauvais films et ajoute un lien vers Rotten Tomatoes
// @author       You
// @match        http*://rarbgaccessed.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let movies  = document.querySelectorAll('table.lista2t tr.lista2 td:nth-child(2)');

    movies.forEach((movie) => {

        let rating = parseFloat(movie.querySelector('span').innerHTML.match(/.*IMDB: ([0-9]\.[0-9])\/10/i)[1]);

        if(rating < 7.0) {
            movie.closest('tr').remove();
        } else {
            let completeTitle = movie.querySelector('a').innerHTML.match(/(.*)\.[0-9]{4}\./i)[1].replace(/\./g, ' ');

            let lineBreak = movie.querySelector('br');

            let rottenTomatoesLink = document.createElement("a");
            rottenTomatoesLink.href = `https://www.rottentomatoes.com/search/?search=${encodeURI(completeTitle)}`;
            let img = document.createElement("img");
            img.src = 'https://staticv2-4.rottentomatoes.com/static/images/iphone/apple-touch-icon.png';
            img.style.height = '30px';
            img.style.width = '30px';
            rottenTomatoesLink.appendChild(img);
            lineBreak.parentNode.insertBefore(rottenTomatoesLink, lineBreak);
        }
    });
})();
