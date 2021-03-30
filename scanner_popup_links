// ==UserScript==
// @name           Open scanner pages in new window
// @namespace      fasttrackdev
// @version        0.1
// @author         Nathaniel "Dragon"
// @description    Add _blank target to links that have the word "scan" in the 1st segment URL.
// @match          http://fasttrackdev/*
// ==/UserScript==
function prep() {
    var pattern = /fasttrackdev\/scan/;
    var arr = [], links = document.links, r = 0, page = '';
    for(var i=0; i<links.length; i++) {
        if(links[i].href.match(pattern)) {
            links[i].target = "_blank";
            arr.push(links[i].href);
            console.log(links[i].href);
        }
    }
    console.log('There are ' + arr.length + ' matching links on this page.');
    return arr;
}

prep();
