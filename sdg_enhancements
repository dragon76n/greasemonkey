// ==UserScript==
// @name     SDG Enhancements
// @version  1
// @match    http://*.?superdupergames.org/*
// ==/UserScript==

// Add Telegram link to main menu
var myMenuP = document.querySelector('p');
var myNewA = document.createElement('a');
myNewA.setAttribute('href',"http://superdupergames.org/?page=telegram");
myNewA.setAttribute('style',"font-weight:bold;");
myNewA.innerText = 'Telegram Game';
myMenuP.append(' | ');
myMenuP.appendChild(myNewA);

// Float Homeworlds form and stash near starmap
if(window.location.search.indexOf('page=play_homeworlds') !== -1) { 
  var myForm = document.querySelector('form');
  var myNewP = document.createElement('p');
  var myImg = document.querySelector('table table table img');
  myForm.setAttribute('style',"position:fixed; width:20%; left:10%; background-color: lightgray; border: 3px groove");
  myNewP.setAttribute('style',"position:absolute; right:0;");
  myForm.appendChild(myNewP);
  myNewP.appendChild(myImg);
}
