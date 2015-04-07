/* 
* Pandora-Engine
* License to Scarlet. 
* Thanks to other PE contributors for the help! 
* Special thanks to Andrew for giving a tutorial for this at Tuts+ 
*/

if (typeof Array.prototype.indexOf !== "function") {
 Array.prototype.indexOf = function(item) {
  for(var i=0;i<this.length;i++) {
   if(this[i] === item) {
    return i;
   }
  }
  return -1;
 };
}

window.pandora = (function() {
 function Pandora(els) {
  for(var i=0;i<els.length;i++) {
   this[i] = els[i];
  }
  this.length = els.length;
 }
 
 Pandora.prototype.audio = function(audio) {
  /* will only works with .MP3 files */
   var audio = new Audio(audio);
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
  
  create: function(tagName, attrs) {
   var el = new Pandora([document.createElement(tagname)]);
   if(attrs) {
    if(attrs.className) {
     el.addClass(attrs.className);
     delete attrs.className;
    }
    if(attrs.text) {
     el.text(attrs.text);
     delete el.text;
    }
    for(var key in attrs) {
     if(attrs.hasOwnProperty(key)) {
      el.attr(key, attrs[key]);
     }
    }
   }
   return el;
  }
};

 return pandora;
}());
