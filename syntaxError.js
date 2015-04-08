function logAI() {
  head = document.getElementsByTagName('head')[0];
  script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', '/AI.js');
  head.appendChild(script);
}

function checkAI() {
  url = '/AI.js';
  if(!url) {
    scripts = document.getElementsByTagName('script');
    for(var i=scripts.length;i--;) {
      if(script[i].src == url) return true;
    }
    return false;
  }
}

function checkMiss(code) {
  try{
    eval(code);
  }catch(e) {
    console.log('Code encountered ' + e.constructor + '; detailed report :' + e);
  }
}
