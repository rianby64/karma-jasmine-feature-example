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

