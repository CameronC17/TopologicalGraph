this.animFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || window.oRequestAnimationFrame      || window.msRequestAnimationFrame     || null ;

//mouse listener
window.addEventListener('mousedown', saveMouse, false);

var tgraph = new TGraph("canvas");

tgraph.addObject();

//This loops the animation frames for animation!!!!
var recursiveAnim = function() {
          tgraph.draw();
          animFrame(recursiveAnim);
    };
animFrame(recursiveAnim);

function saveMouse(e) {
  tgraph.mouseClick(e);
}
