"use strict";

function Wall(){
  this.bottles = 0;
}

Wall.prototype.setBottles = function setBottles(bottles) {
  this.bottles = bottles;
}

Wall.prototype.getBottles = function getBottles() {
  return this.bottles;
}

Wall.prototype.accident = function accident(bottle) {
  this.bottles -= bottle;
}
