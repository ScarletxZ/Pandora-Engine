/*
* Pandora, an AI for PE (Pandora Engine). 
* This is a JavaScript-based AI. 
* Some references were found in Google. 
*/

/* ========================= CONFIG =========================== */

var description = "Hello, meet Pandora, a mascot for Pandora Engine. Pandora will help you code in JavaScript, every single 
code you written will result so many reactions from Pandora!";

var audioSwitch = true; /* set to true if you like to use the audio to make Pandora talk with a sound, not only the text,
set to false for otherwise */

var enableGraph = true; /* set to false to not display the Pandora's graphic, type true if otherwise */

/* ======================== END ============================== */

/* ================= Warning : Don't touch UNLESS IF YOU KNOW WHAT YOU ARE DOING! =============== */

/* Reference to StackOverflow. */
function logSE() {
 head = document.getElementsByTagName('head')[0];
 script = document.createElement('script');
 script.setAttribute('type', 'text/javascript');
 script.setAttribute('src', '/syntaxError.js');
 head.appendChild(script);
}

function checkSE() {
 url = '/syntaxError.js';
 if(!url) {
  scripts = document.getElementsByTagName('script');
  for(var i=scripts.length;i--;) {
   if(scripts[i].src == url) return true;
  }
  return false;
 }
}

if(audioSwitch === true) { window.activateAudio === true; }
if(audioSwitch === false) { window.activateAudio === false; }
console.log(description);
function activateAudio() { 
 audio1 = new Audio('audio_link_1');
 audio1.play;
 audio2 = new Audio('audio_link_2');
 audio2.play;
}

function showGraphic() {
 graphic = $.get('/link-to-graphic-here');
 /* some random codes */
}

/* will edit later if found some resources */
