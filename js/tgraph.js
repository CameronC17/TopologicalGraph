class TGraph {
  constructor(canvas) {
    this.c = document.getElementById(canvas);
    this.ctx = this.c.getContext("2d");

    //holds all of the objects and lines
    this.objects = [];
  }

  addObject(type, name, data) {
    //var pos = getObjectPosition();
    var block = {
      "type" : type,
      "name" : name,
      "x" : 50,
      "y" : 50,
      "width" : 100,
      "height" : 100,
      "colour" : "#00ff00"
    }
    this.objects.push(block);
  }

  // mouse stuff
  mouseClick(e) {
    var pos = this.getMousePos(e);
    var area = {
      x: 0,
      y: 0,
      width: this.c.width,
      height: this.c.height
    }
    if (this.isInside(pos, area)) {
      console.log("Yes");
    } else {
      console.log("Click outside the area");
    }
  }

  getMousePos(evt) {
    var rect = this.c.getBoundingClientRect();
    //Return mouse location related to canvas with JSON format
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
  }

  isInside(pos, obj) {
    if (pos.x >= obj.x && pos.x <= obj.x + obj.width && pos.y >= obj.y && pos.y <= obj.y + obj.height) {
      return true;
    }
    return false;
  }

  draw() {
    for (let object of this.objects) {
      this.ctx.fillStyle=object.colour;
      this.ctx.fillRect(object.x, object.y, object.width, object.height);
    }
  }


}
