// ==UserScript==
// @name         Twitter Web App back overlay
// @namespace    https://nnn1590.org/
// @version      0.1
// @description  umm...
// @author       NNN1590
// @license      GPL-3.0-or-later
// @match        https://twitter.com/*
// @match        https://m.twitter.com/*
// @match        https://mobile.twitter.com/*
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("body").insertAdjacentHTML('beforebegin', `
<div id="nnn1590overlay" style="
    background: #80808080;
    height: 585px;
    margin-top: 16px;
    float: right;
    width: 434px;
    z-index: 114514;
    /* position: relative; */
    /* position: sticky; */
    position: fixed;
    margin-left: auto;
    right: 0;
    bottom: 0;
    background-attachment: fixed;
"><!--<a href="javascript:window.history.back(-1)" style="width: 100%;height:100%;display:inline-block;">back</a>--></div>
<div id="nnn1590overlay2" style="
    background: #80808080;
    height: 100%;
    float: left;
    width: 68px;
    z-index: 114514;
    position: fixed;
    margin-left: auto;
    left: 0;
    bottom: 0;
    background-attachment: fixed;
"></div>`); // onclick="javascript:window.history.back(-1);return false;"
    document.querySelector('#nnn1590overlay').addEventListener('click', function(){window.history.back(-1);return false;});
    document.querySelector('#nnn1590overlay2').addEventListener('click', function(){window.history.back(-1);return false;});
})();
