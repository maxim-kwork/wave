$(function () {
	$('.blog__slider').slick({
		arrows: false,
		cssEase: 'linear',
		dots: true,
		appendDots: $('.blog__dots'),
	})
	$('.burger').on('click', function (e) {
		e.preventDefault()
		$('.header__top').toggleClass('header__top--open')
		$('.overlay').toggleClass('overlay--show')
	})
})
