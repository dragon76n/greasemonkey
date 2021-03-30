// ==UserScript==
// @name           Open scanner pages in new window
// @namespace      fasttrackdev
// @version        0.2
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
            links[i].classList.add("scanner-link");
            var temp = links[i].href;
            arr.push(links[i].href);
            console.log(links[i].href);
            links[i].dataset.href = temp;
            links[i].href = '#';
            links[i].removeAttribute('href');
            links[i].addEventListener("click", popup);
        }
    }

    console.log('There are ' + arr.length + ' matching links on this page.');
    return arr;
}

function popup() {
    window.open(this.dataset.href, '_blank', 'width=320,height=240');
}

prep();
