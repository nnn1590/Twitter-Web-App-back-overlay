// ==UserScript==
// @name         Twitter Web App back overlay
// @namespace    https://nnn1590.org/
// @version      0.1
// @description  umm...
// @author       NNN1590
// @license      GPLv3
// @match        https://twitter.com/* https://m.twitter.com/* https://mobile.twitter.com/*
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("body").insertAdjacentHTML('beforebegin', `
<div id="nnn1590overlay" style="
    background: #33b5e580;
    height: 100%;
    float: right;
    width: 425px;
    z-index: 114514;
    /* position: relative; */
    /* position: sticky; */
    position: fixed;
    margin-left: auto;
    right: 0;
    background-attachment: fixed;
"><!--<a href="javascript:window.history.back(-1)" style="width: 100%;height:100%;display:inline-block;">back</a>--></div>`); // onclick="javascript:window.history.back(-1);return false;"
    document.querySelector('#nnn1590overlay').addEventListener('click', function(){window.history.back(-1);return false;});
})();
