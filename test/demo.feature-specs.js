(function(){
	'use strict';
	featureSteps(/Roman numerals/)
		.given(/I have a Roman numerals calculator/, function(){
			this.calculator = new Calculator();
		})
		.given(/I enter '(.*)' in the calculator/, function(roman){
			this.calculator.setInput(roman);
		})
		.when(/I convert the roman numeral/, function(){
			this.calculator.convert();
		})
		.when(/I press add/, function(){
			this.calculator.add();
		})
		.then(/the displayed value is '(.*)'/, function(num){
		//	expect(this.calculator.getDisplayedValue()).toBe(num);
		});
		
	featureSteps(/Roman numerals/)
		.given("I add a quote ' in step",function(){})
		.when("I run the scenario with (.*)",function(param){ 
			this.param = param; 
		})
		.then('the first Example is "(.*)"',function(test){ 
			expect(this.param).toBe(test); 
		});
		
	featureSteps('')
		.given(/A scenario with no js implementation/,function(){ throw new Error("Should not be called"); })
		.when(/I include this scenario/,function(){ throw new Error("Should not be called"); })
		.then(/Nothing happens/,function(){ throw new Error("Should not be called"); })
})();
