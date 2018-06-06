// ==UserScript==
// @name         Rotten Tomatoes Torrent Links (Browse pages)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.rottentomatoes.com/browse/*
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    let addBTLinkToMovie = () => {
        console.log('addBTLinkToMovie()')
        waitForKeyElements(".mb-movie:not(.done)", (movie) => {
            $(movie).addClass('done');
            let movieTitleElement = $(movie).find('h3');
            let movieTitle = $(movieTitleElement).text();
            $(movieTitleElement).prepend('Search : ');

            let movieLinkElement = $(movie).find('.movie_info a');
            $(movieLinkElement).attr("href", `https://torrentz2.eu/search?f=${movieTitle}+1080p+dts`)
        }, true);
    };

    addBTLinkToMovie();

    waitForKeyElements('.mb-load-btn', (showMoreButton) => {
        $(showMoreButton).click(addBTLinkToMovie);
    });
})();
