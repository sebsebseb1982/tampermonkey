// ==UserScript==
// @name         Gixen
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Gixen auto login
// @author       You
// @match        https://www.gixen.com/main/home_2.php*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements("#g_id", (form) => {
        form.submit();
    }, true);

})();
