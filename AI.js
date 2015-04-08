/*
* Pandora, an AI for PE (Pandora Engine). 
* This is a JavaScript-based AI. 
* Some references were found in Google. 
*/

/* ========================= CONFIG =========================== */

var description = "Hello, meet Pandora, a mascot for Pandora Engine. Pandora will help you code in JavaScript, every single code
and every single syntax errors you wrote will results the warning from Pandora itself.";

var audioSwitch = 'enable'; /* set to 'enable' if you like to use the audio to make Pandora talk with a sound, not only the text,
set to disable for otherwise */

/* ======================== END ============================== */

/* ================= Warning : Don't touch UNLESS IF YOU KNOW WHAT YOU ARE DOING! =============== */

if(audioSwitch.toLowerCase() == 'disable') { window.activateAudio === false; }
if(audioSwitch.toLowerCase() == 'enable') { window.activateAudio === false; }
console.log(description);
function activateAudio() { 
 audio1 = new Audio('audio_link_1');
 audio1.play;
 audio2 = new Audio('audio_link_2');
 audio2.play;
}

/* will edit later if found some resources */
