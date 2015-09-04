(function(){
	'use strict';
	featureSteps(/Jasmine Example/)
		.given(/with a wall/, function(){
			this.wall = new Wall();
		})
		.given(/(\d+) green. A 'bottles' _ "are" standing on the wall/, function(bottles){
			this.wall.setBottles(bottles);
		})
		.when(/(\d+) green bottle accidentally falls/, function(bottle){
			this.wall.accident(bottle);
		})
		.then(/there are (\d+) green bottles standing on the wall/, function(bottles){
            expect(this.wall.getBottles()).toBe(parseInt(bottles, 10));
		});
})();


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
