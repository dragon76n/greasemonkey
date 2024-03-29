// ==UserScript==
// @name           SDG Enhancements
// @description    Enhancements for the SuperDuperGames site - Float Homeworlds form and stash near starmap and make it draggable. Also add Telegram link to main menu.
// @author         nathaniel@dragonshobbies.com
// @version        1.3.1
// @match          http://superdupergames.org/*
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
  myNewP.innerText = 'Is this in your way? You\'re in luck! This box is draggable!';
  myNewP.setAttribute('style', 'text-align:center; font-style:italic;');
  var myImg = document.querySelector('table table table img');
  myImg.setAttribute('style', "max-width:100%");
  myForm.setAttribute('style',"position:fixed; width:400px; left:10%; background-color: #c0c0c0; border: 3px groove; cursor:grab; padding: 10px;");
  //myNewP.setAttribute('style',"position:absolute; right:0;");
  myForm.appendChild(myNewP);
  myNewP.appendChild(myImg);
}

// Make the box draggable: source: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(myForm);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    elmnt.style.cursor = 'move'; // You can do this or use a css class to change the cursor
    return true;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.cursor = 'grab'; // You can do this or use a css class to change the cursor
    elmnt.getElementsByTagName('textarea')[0].focus(); // Fix focus after moving
  }
}
