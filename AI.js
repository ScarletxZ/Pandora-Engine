/*
* Pandora, an AI for PE (Pandora Engine). 
* This is a JavaScript-based AI. 
* Some references were found in Google. 
*/

/* ========================= CONFIG =========================== */

var description = "Hello, meet Pandora, a mascot for Pandora Engine. Pandora will help you code in JavaScript, every single code
and every single syntax errors you wrote will results the warning from Pandora itself.";

var switch = 'enable'; /* set to 'enable' if you like to use the audio to make Pandora talk with a sound, not only the text,
set to disable for otherwise */

/* ======================== END ============================== */

/* ================= Warning : Don't touch UNLESS IF YOU KNOW WHAT YOU ARE DOING! =============== */

if(switch.toLowerCase() == 'disable') {
 window.activateAudio === false;
}

if(switch.toLowerCase() == 'enable') {
 window.activateAudio === true;
}
/* FYI : to avoid case-sensitives, we'll change it into lower-case so it'll becomes lower case */

console.log(description);
/* FYI : we'll log the description of the AI */

/* more code here */
