// var functions = {
// 	getRandomInt: function(min, max) {
// 		return Math.floor(Math.random() * (max - min + 1)) + min;
// 	}
// }
// var animatedBackground = $('#animated-background'),
//     windowSize = window.innerWidth,
//     noOfStars = functions.getRandomInt(0, windowSize) / 3;
// /**
// * Add stars and metorites
// * noOfStars and Meteroties should be according to device size
// * use 3 types of stars, see class in main.css
// * put all animations in animated-background id
// * You can implement your ideas by designing from scratch
// */
// function intro() {
// 	var intro = $('#intro');
// 	var title = $('#title');
// 	TweenMax.to(".large-star", 10, {x :0,y: -window.innerHeight*2,repeat:-1, ease: Power0.easeNone});
// 	TweenMax.to(".medium-star", 10, {x :0,y: -window.innerHeight*2,repeat:-1, delay:4, ease: Power0.easeNone});
// 	TweenMax.to(".small-star", 10, {x :0,y: -window.innerHeight*2,repeat:-1, delay:8, ease: Power0.easeNone});
// 	TweenMax.to(intro, 1, {opacity:1, delay:0});
// 	TweenMax.to(intro, 0.5, {opacity:0,repeat:4, delay:1.1});
// 	TweenMax.to(title, 1.6, {opacity:1, delay:4});
// 	TweenMax.to(title, 2, {scale : 1.05, repeat:-1, yoyo:true, delay:8});
// 	TweenMax.to(date, 1.5, {rotationX : 360,delay:5});
// 	TweenMax.to("#nebulla", 15, {y: -window.innerHeight*3, delay:7.5, repeat:-1});
// }
// function addStars() {
// 	for(var i =1; i<=noOfStars; i++) {
// 		var star = document.createElement('div');
// 		var r = functions.getRandomInt(1,3);
// 		if(r==1)
// 			star.className = 'small-star';
// 		else if(r==2)
// 			star.className = 'medium-star';
// 		else if(r==3)
// 			star.className = 'large-star';
// 		star.style.left = functions.getRandomInt(0, windowSize)+'px';
// 		star.style.top = functions.getRandomInt(0, window.innerHeight) + window.innerHeight+'px'
// 		animatedBackground.append(star);
// 	}
// }
// addStars();
// intro();

(function(d, dO, $) {

	var Vars = {
		noOfStars: null
	},
	DOM = {
		intro: null,
		title: null,
		animatedBackground: null
	},
	Functions = {
		addStars: function() {
			for(var i = 1; i <= Vars.noOfStars; i++) {
				var star = document.createElement('div');
				var r = Functions.getRandomInt(1,3);
			if(r == 1)
				star.className = 'small-star';
			else if(r == 2)
				star.className = 'medium-star';
			else if(r == 3)
				star.className = 'large-star';
				star.style.left = Functions.getRandomInt(0, window.innerWidth) + 'px';
				star.style.top = Functions.getRandomInt(0, window.innerHeight) + window.innerHeight+'px'
				DOM.animatedBackground.append(star);
			}
		},
		start: function() {
			var intro = $('#intro');
			var title = $('#title');
			TweenMax.to(".large-star", 10, {
				x :0,
				y: -window.innerHeight*2,
				repeat:-1, 
				ease: Power0.easeNone});
			TweenMax.to(".medium-star", 10, {
				x :0,
				y: -window.innerHeight*2,
				repeat:-1, 
				delay:4, 
				ease: Power0.easeNone});
			TweenMax.to(".small-star", 10, {
				x :0,
				y: -window.innerHeight*2,
				repeat:-1, 
				delay:8, ease: 
				Power0.easeNone});
			TweenMax.to(intro, 1, {
				opacity:1, 
				delay:0});
			TweenMax.to(intro, 0.5, {
				opacity:0,
				repeat:4, 
				delay:1.1});
			TweenMax.to(title, 1.6, {
				opacity:1, 
				delay:4});
			TweenMax.to(title, 2, {
				scale : 1.1, 
				repeat:-1, 
				yoyo:true, 
				delay:8});
			TweenMax.to(date, 1.5, {
				opacity: 1,
				delay:5});
			TweenMax.to("#nebulla", 15, {
				y: -window.innerHeight*3,
				rotationZ: 60, 
				delay:6.8, 
				repeat:-1});
			TweenMax.staggerFrom(".icon", 0.5, {
				scale: 5,
				opacity: 0,
				delay: 6, 
				ease: Power0.easeNone}, 
				0.5);
		},
		getRandomInt: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;		
		}			
	};
	dO.ready( function() {
		DOM.intro = $('#intro');
		DOM.title = $('#title');
		DOM.animatedBackground = $('#animated-background');
		Vars.noOfStars = Functions.getRandomInt(0, window.innerWidth) / 3;
		Functions.addStars();
		Functions.start();
	});
})(document, jQuery(document), jQuery);