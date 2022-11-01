$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$('.slider').slick({
  arrows:false,
  fade:true,
})
$('.slider2').slick({
  slidesToShow:3,
  centerMode:true,
  centerPadding:"0",
  asNavFor:('.slider'),
  nextArrow:'<i class="fas fa-long-arrow-alt-right next">',
  prevArrow:'<i class="fas fa-long-arrow-alt-left prev">'
})


$('.inner2').mouseenter(function(){
  $('.outer1').css("transform","scale(1)")
  $('.outer2').css("transform","scale(1)")
  $('.line2').css("width","38%")
  $('.big1').css("transform","scale(1)")
  $('.big2').css("transform","scale(1)")
  $('.one').css("color","#5f24ef")
  $('.one').css("opacity",".4")
  $('.two').css("color","#5f24ef")
  $('.two').css("opacity",".4")
})
$('.inner3').mouseenter(function(){
  $('.outer1').css("transform","scale(1)")
  $('.outer2').css("transform","scale(1)")
  $('.outer3').css("transform","scale(1)")
  $('.line2').css("width","62%")
  $('.big1').css("transform","scale(1)")
  $('.big2').css("transform","scale(1)")
  $('.big3').css("transform","scale(1)")
  $('.one').css("color","#5f24ef")
  $('.one').css("opacity",".4")
  $('.two').css("color","#5f24ef")
  $('.two').css("opacity",".4")
  $('.three').css("color","#5f24ef")
  $('.three').css("opacity",".4")
})
$('.inner4').mouseenter(function(){
  $('.outer1').css("transform","scale(1)")
  $('.outer2').css("transform","scale(1)")
  $('.outer3').css("transform","scale(1)")
  $('.outer4').css("transform","scale(1)")
  $('.line2').css("width","100%")
  $('.big1').css("transform","scale(1)")
  $('.big2').css("transform","scale(1)")
  $('.big3').css("transform","scale(1)")
  $('.big4').css("transform","scale(1)")
  $('.one').css("color","#5f24ef")
  $('.one').css("opacity",".4")
  $('.two').css("color","#5f24ef")
  $('.two').css("opacity",".4")
  $('.three').css("color","#5f24ef")
  $('.three').css("opacity",".4")
  $('.four').css("color","#5f24ef")
  $('.four').css("opacity",".4")
})


$('.inner2').mouseleave(function(){
  $('.outer2').css("transform","scale(0)")
  $('.line2').css("width","12%")
  $('.big2').css("transform","scale(0)")
  $('.two').css("color","#1c0e3e")
  $('.two').css("opacity","1")
})
$('.inner3').mouseleave(function(){
  $('.outer2').css("transform","scale(0)")
  $('.outer3').css("transform","scale(0)")
  $('.line2').css("width","12%")
  $('.big2').css("transform","scale(0)")
  $('.big3').css("transform","scale(0)")
  $('.two').css("color","#1c0e3e")
  $('.two').css("opacity","1")
  $('.three').css("color","#1c0e3e")
  $('.three').css("opacity","1")
})
$('.inner4').mouseleave(function(){
  $('.outer2').css("transform","scale(0)")
  $('.outer3').css("transform","scale(0)")
  $('.outer4').css("transform","scale(0)")
  $('.line2').css("width","12%")
  $('.big2').css("transform","scale(0)")
  $('.big3').css("transform","scale(0)")
  $('.big4').css("transform","scale(0)")
  $('.two').css("color","#1c0e3e")
  $('.two').css("opacity","1")
  $('.three').css("color","#1c0e3e")
  $('.three').css("opacity","1")
  $('.four').css("color","#1c0e3e")
  $('.four').css("opacity","1")
})


$('.test-slider').slick({
  arrows:false,
  fade:true,
})
$('.bottom-slider').slick({
  slidesToShow: 5,
  centerMode:true,
  centerPadding:'0',
  nextArrow:'<button class="one"><h3>See Next</h3><i class="fas fa-long-arrow-alt-right"></i></button>',
  prevArrow:'<button class="two"><i class="fas fa-long-arrow-alt-left"></i><h3>See Previous</h3></button>',
  asNavFor:'.test-slider',
})


var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2, {
  relativeInput: true
});

$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller();
	$('#bar4').barfiller();
	$('#bar5').barfiller();
	$('#bar6').barfiller();
	
});