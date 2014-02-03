// Generated by CoffeeScript 1.7.1
(function() {
  var down, dragElem, dragInit, mouseX, mouseY, move, objX, objY, over, point, pts_pos;

  dragElem = null;

  point = document.getElementById("point");

  pts_pos = document.getElementById("point-position");

  objX = 0;

  objY = 0;

  mouseX = 0;

  mouseY = 0;

  down = function(evt) {
    console.log('down');
    evt = evt || window.event;
    dragElem = this;
    objX = parseInt(this.style.left);
    objY = parseInt(this.style.top);
    mouseX = parseInt(evt.clientX);
    return mouseY = parseInt(evt.clientY);
  };

  move = function(evt) {
    var x, y;
    evt = evt || window.event;
    if (dragElem) {
      x = parseInt(evt.clientX - mouseX + objX);
      y = parseInt(evt.clientY - mouseY + objY);
      pts_pos.innerHTML = "(" + x + "px, " + y + "px) " + dragElem;
      dragElem.style.left = x + "px";
      return dragElem.style.top = y + "px";
    }
  };

  over = function() {
    return this.style.cursor = "move";
  };

  dragInit = function(node) {
    var c, _i, _len, _ref, _results;
    if (node.className === 'drag') {
      node.onmousedown = down;
      document.onmousemove = move;
      node.onmouseover = over;
      node.style.position = "relative";
      node.style.top = "0px";
      node.style.left = "0px";
      node.dragging = false;
      node.draggable = true;
      console.log(node);
    }
    _ref = node.childNodes;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      c = _ref[_i];
      _results.push(dragInit(c));
    }
    return _results;
  };

  dragInit(document);

  document.onmouseup = function() {
    dragElem = null;
    return pts_pos.innerHTML = "(" + point.style.top + ", " + point.style.left + ") (" + objX + ", " + objY + ") (" + mouseX + ", " + mouseY + ") " + dragElem + " " + (Math.random());
  };

  console.log(point.onmousedown);

}).call(this);