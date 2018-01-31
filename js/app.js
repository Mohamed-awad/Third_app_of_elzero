/*global $, alert, console*/

$(function () {
	'use strict';
	
	// Triger nice scroll plugin
	$('html').niceScroll({
		cursorcolor: '#f7600e',
		cursorwidth: '10px',
		cursorborder: '1px solid #f7600e',
		cursorborderradius: 0
	});
	
	// change header height
	$('.header').height($(window).height());
	
	//Scroll to features
	$('.header .arrow i').click(function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);
	});
	
	//Scroll to team
	$('.hire').click(function () {
		$('html, body').animate({
			scrollTop: $('.our-team').offset().top
		}, 1000);
	});
	
	//Scroll to work
	$('.work').click(function () {
		$('html, body').animate({
			scrollTop: $('.our-work').offset().top
		}, 1000);
	});
	
	//Show hidden Items From Work
	$('.show-more').click(function () {
		$('.our-work .hidden').fadeIn(1000);
	});
	
	// check Testimonials
	var leftArrow = $('.testim .fa-chevron-left'), rightArrow = $('.testim .fa-chevron-right');
	function checkClients() {
		if ($('.client:first').hasClass('active')) {
			leftArrow.fadeOut();
		} else {
			leftArrow.fadeIn();
		}
		if ($('.client:last').hasClass('active')) {
			rightArrow.fadeOut();
		} else {
			rightArrow.fadeIn();
		}
	}
	checkClients();
	$('.testim i').click(function () {
		if ($(this).hasClass('fa-chevron-right')) {
			$('.testim .active').fadeOut(500,  function () {
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				checkClients();
			});
		} else {
			$('.testim .active').fadeOut(500,  function () {
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkClients();
			});
		}
	});
});