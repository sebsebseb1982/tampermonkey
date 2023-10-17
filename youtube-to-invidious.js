// ==UserScript==
// @name         YouTube to Invidious
// @namespace    http://tampermonkey.net/
// @version      1.1
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const targetNode = document.querySelector("#content");
    const observerOptions = {
        childList: true,
        attributes: false,
        // Omit (or set to false) to observe only changes to the parent node
        subtree: true
    }

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);

    function callback(mutationList, observer) {
        mutationList.forEach((mutation) => {
            if (window.location.href.includes("youtube.com")) {
                let videoID = new URLSearchParams(window.location.search).get('v');
                if (videoID) {
                    window.location.replace(`https://invidious.fdn.fr/watch?v=${videoID}`);
                }
            }
        });
    }
})();
