// ==UserScript==
// @name         Add BT Share button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let links = document.getElementsByTagName("a");
    links = Array.apply(window, links);

    for (let aLink of links) {
        if(aLink.href.startsWith('magnet:') || aLink.href.endsWith('.torrent')) {
            let shareButton = document.createElement("a");
            shareButton.href = 'https://www.google.fr';
            let img = document.createElement("img");
            img.src = 'https://image.flaticon.com/icons/svg/189/189676.svg';
            img.style.height = '30px';
            img.style.width = '30px';
            shareButton.appendChild(img);
            aLink.parentNode.insertBefore(shareButton, aLink);
        }
    }
})();
