/* 
* Pandora-Engine
* License to Scarlet. 
* Thanks to other PE contributors for the help! 
* Special thanks to andrew8808 for giving a tutorial for this~
*/

window.pandora = (function() {
 function Pandora(els) {
  for(var i=0;i<els.length;i++) {
   this[i] = els[i];
  }
  this.length = els.length;
 }
 
 Pandora.prototype.audio = function(audioname) {
  /* will only works with .MP3 files */
   audio = new Audio(audioname);
  return new playAudio();
   function playAudio() {
    audio.play;
  }
}
 
 var pandora = {
  get: function(selector) {
   var els;
   if(typeof selector === 'string') {
    els = document.querySelectorAll;
  }else if (selector.length) {
   els = selector;
  }else{
   els = [selector];
  }
  return new Pandora(els);
};

 return pandora;
}();
