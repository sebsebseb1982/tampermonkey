// ==UserScript==
// @name         YouTube to Invidious
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        *://www.youtube.com/watch?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.includes("youtube.com")) {
        let videoID = new URLSearchParams(window.location.search).get('v');
        if (videoID) {
            window.location.replace(`https://invidious.fdn.fr/watch?v=${videoID}`);
        }
    }
})();
